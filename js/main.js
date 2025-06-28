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
