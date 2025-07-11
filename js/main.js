const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');
const overlay = document.getElementById('nav-overlay');

burger.addEventListener('click', () => {
  nav.classList.add('open');
  overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open');
  overlay.classList.remove('active');
});

function loadYouTubeVideoAsync(youtubeId, asideSelector) {
  return new Promise((resolve, reject) => {
    const iframe = document.createElement('iframe');
    iframe.width = 320;
    iframe.height = 180;
    iframe.src = `https://www.youtube.com/embed/${youtubeId}`;
    iframe.title = 'YouTube video player';
    iframe.frameBorder = '0';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.display = 'none';

    iframe.onload = () => resolve(iframe);
    iframe.onerror = () => reject('Failed to load YouTube video.');

    document.querySelector(asideSelector).appendChild(iframe);
  });
}

loadYouTubeVideoAsync('rIjSdgP7Qxo', '#hiking-tip') // Replace with your YouTube video ID
  .then((iframe) => {
    iframe.style.display = 'block';
  })
  .catch((err) => {
    console.error(err);
  });

document.addEventListener('DOMContentLoaded', function () {
  const contactLink = document.querySelector('a[href="#contact"]');
  const contactInfo = document.querySelector('.contact-info');

  if (contactLink && contactInfo) {
    contactLink.addEventListener('click', function (event) {
      event.preventDefault();

      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });

      if (contactInfo.classList.contains('visible')) {
        contactInfo.classList.remove('visible');
        setTimeout(() => (contactInfo.style.display = 'none'), 500);
      } else {
        contactInfo.style.display = 'block';
        setTimeout(() => contactInfo.classList.add('visible'), 10);
      }
    });
  }
});

let themeApplied = false;

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  toggleButton.addEventListener('click', () => {
    const existingTheme = document.getElementById('theme-style');

    if (!themeApplied) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = './css/dark-theme.css';
      link.id = 'theme-style';
      document.head.appendChild(link);
      themeApplied = true;
    } else {
      existingTheme.remove();
      themeApplied = false;
    }
  });
});
