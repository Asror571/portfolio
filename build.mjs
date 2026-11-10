import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

const heads = JSON.parse(await readFile('src/page-heads.json', 'utf8'));
await rm('dist', { recursive: true, force: true });
await cp('public', 'dist', { recursive: true });

const [server] = await Promise.all([
  build({
    entryPoints: ['src/render.jsx'],
    bundle: true,
    packages: 'external',
    platform: 'node',
    format: 'esm',
    jsx: 'automatic',
    write: false,
  }),
  build({
    entryPoints: ['src/client.jsx'],
    bundle: true,
    minify: true,
    jsx: 'automatic',
    outfile: 'dist/portfolio.js',
  }),
]);

const renderUrl = new URL('./.render.mjs', import.meta.url);
await writeFile(renderUrl, server.outputFiles[0].contents);
try {
  const { render } = await import(renderUrl);
  for (const [language, head] of Object.entries(heads)) {
    const directory = language === 'en' ? 'dist' : 'dist/' + language;
    await mkdir(directory, { recursive: true });
    const script = '<script src="/portfolio.js" defer></script>';
    await writeFile(directory + '/index.html', head.replace('</head>', script + '</head>') +
      '<body>' + render(language) + '</body></html>\n');
  }
} finally {
  await rm(renderUrl, { force: true });
}
