import { hydrateRoot } from 'react-dom/client';
import { App } from './App.jsx';

hydrateRoot(document.body, <App language={document.documentElement.lang} />);
