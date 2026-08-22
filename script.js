document.documentElement.classList.add('js-enabled');

const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

links?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

const items = document.querySelectorAll(
  '.card, .thm, .timeline p, .journey-item, .contact'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08
  }
);

items.forEach((item) => observer.observe(item));