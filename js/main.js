/* HERO PARALLAX */
const hero = document.querySelector('.hero-image');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  hero.style.transform = `translate(${x - 20}%, ${y - 20}%)`;
});

/* PROYECTOS PREVIEW */
const cards = document.querySelectorAll('.project-card');
const preview = document.getElementById('previewImage');

cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    preview.style.display = 'block';
    preview.style.left = e.pageX + 20 + 'px';
    preview.style.top = e.pageY + 20 + 'px';
    preview.style.backgroundImage = `url(${card.dataset.img})`;
  });

  card.addEventListener('mouseleave', () => {
    preview.style.display = 'none';
  });
});

/* SOBRE MI SCROLL */
const words = document.querySelectorAll('.highlight span');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  words.forEach((word, i) => {
    const trigger = 800 + i * 150;
    word.style.opacity = scrollY > trigger ? '1' : '0.2';
  });
});