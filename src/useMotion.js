import { useEffect } from 'react';

export function useMotion(progressRef) {
  useEffect(() => {
    const progress = progressRef.current;
    let frame = 0;
    function updateProgress() {
      frame = 0;
      const total = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = 'scaleX(' + (total > 0 ? Math.max(0, Math.min(1, scrollY / total)) : 0) + ')';
    }
    function queueProgress() {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    }
    addEventListener('scroll', queueProgress, { passive: true });
    addEventListener('resize', queueProgress);
    queueProgress();

    const motion = matchMedia('(prefers-reduced-motion: no-preference)');
    const counterFrames = new Map();
    let observer;
    if (motion.matches && 'IntersectionObserver' in window) {
      const elements = document.querySelectorAll(
        '.section-head, .about-grid > *, .result, .job, .skill, .edu, .technical, .language, .contact-grid',
      );
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
          const count = entry.target.querySelector('[data-count]');
          if (!count || !motion.matches) continue;
          const total = Number(count.dataset.count);
          const start = performance.now();
          function tick(now) {
            const fraction = motion.matches ? Math.min((now - start) / 700, 1) : 1;
            count.textContent = String(Math.round(total * (1 - (1 - fraction) ** 3)));
            if (fraction < 1) counterFrames.set(count, requestAnimationFrame(tick));
            else counterFrames.delete(count);
          }
          counterFrames.set(count, requestAnimationFrame(tick));
        }
      }, { threshold: 0.12 });
      elements.forEach(element => observer.observe(element));
    }

    return () => {
      removeEventListener('scroll', queueProgress);
      removeEventListener('resize', queueProgress);
      cancelAnimationFrame(frame);
      observer?.disconnect();
      counterFrames.forEach(id => cancelAnimationFrame(id));
    };
  }, [progressRef]);
}
