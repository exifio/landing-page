document.addEventListener('DOMContentLoaded', () => {
  const scrollButtons = document.querySelectorAll('.js-scroll-to-how');
  scrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#how-it-works');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeUpElements = document.querySelectorAll('.fade-up');
  if (prefersReducedMotion) {
    fadeUpElements.forEach(el => el.classList.add('visible'));
  } else {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    fadeUpElements.forEach(el => observer.observe(el));
  }
});
