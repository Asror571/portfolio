import { useEffect, useRef, useState } from 'react';
import { Header, Main, QuickNavigation } from './sections.jsx';
import translations from './translations.json';
import { useMotion } from './useMotion.js';

export function App({ language }) {
  const t = (english, key = english) => translations[language]?.[key] ?? english;
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyText, setCopyText] = useState(null);
  const menuRef = useRef(null);
  const dialogRef = useRef(null);
  const progressRef = useRef(null);
  useMotion(progressRef);

  useEffect(() => {
    function handleShortcut(event) {
      const dialog = dialogRef.current;
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (dialog.open) dialog.close();
        else dialog.showModal();
      }
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        if (!dialog.open) menuRef.current.focus();
      }
    }
    document.addEventListener('keydown', handleShortcut);
    return () => document.removeEventListener('keydown', handleShortcut);
  }, [menuOpen]);

  function closeQuick() {
    dialogRef.current.close();
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) closeQuick();
  }

  function keepSection(event) {
    const link = event.target.closest('a');
    if (link && location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      link.hash = location.hash;
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('asrorqurbonazarov@gmail.com');
      setCopyText(t('Email copied ✓'));
    } catch {
      setCopyText(t('Select the email address above to copy'));
    }
  }

  return (
    <>
      <a className="skip" href="#main">{t('Skip to content')}</a>
      <Header
        t={t}
        language={language}
        menu={{ ref: menuRef, 'aria-expanded': menuOpen, onClick: () => setMenuOpen(open => !open) }}
        menuText={menuOpen ? t('Close') + ' −' : t('Menu') + ' +'}
        navigation={{
          className: menuOpen ? 'navlinks open' : 'navlinks',
          onClick: event => {
            if (event.target.closest('a')) setMenuOpen(false);
          },
        }}
        locale={{ onClick: keepSection }}
        quickTrigger={{ onClick: () => dialogRef.current.showModal() }}
        progress={{ ref: progressRef }}
      />
      <Main t={t} copy={{ onClick: copyEmail }} copyText={copyText} />
      <QuickNavigation t={t} dialog={{ ref: dialogRef, onClick: closeOnBackdrop }} closeQuick={closeQuick} />
    </>
  );
}
