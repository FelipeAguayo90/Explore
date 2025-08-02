/*
Project:  Project 5-Personal Web Site-Visitor Form Validation-Refactor JS
Name: Felipe Aguayo
Submitted: 08/01/25

I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student, 
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.


Added the sections visibility toggle functionality
*/
const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');
const overlay = document.getElementById('nav-overlay');

document.addEventListener('DOMContentLoaded', function (event) {
  initValidation('myForm', 'success');
});

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
  const mainLink = document.querySelector('a[href="#home"]');
  const heroSection = document.querySelector('#hero');
  const eventsLink = document.querySelector('a[href="#upcoming-hikes"]');
  const mainEvents = document.querySelector('.events');

  if (eventsLink && mainEvents) {
    eventsLink.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('.events').scrollIntoView({ behavior: 'smooth' });

      if (mainEvents.classList.contains('visible')) {
        mainEvents.classList.remove('visible');
        setTimeout(() => (mainEvents.style.display = 'none'), 500);
      } else {
        mainEvents.style.display = 'block';
        setTimeout(() => mainEvents.classList.add('visible'), 10);
      }
    });
  }

  if (mainLink && heroSection) {
    mainLink.addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#logo').scrollIntoView({ behavior: 'smooth' });

      if (heroSection.classList.contains('visible')) {
        heroSection.classList.remove('visible');
        setTimeout(() => (heroSection.style.display = 'none'), 500);
      } else {
        heroSection.style.display = 'block';
        setTimeout(() => heroSection.classList.add('visible'), 10);
      }
    });
  }

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

function showForm() {
  const logVisitButton = document.querySelector('#log-visit');
  const formContainer = document.querySelector('.visitor-form');

  logVisitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // if (logVisitButton && formContainer) {
    //   if (formContainer.classList.contains('visible')) {
    //     formContainer.classList.remove('visible');
    //     setTimeout(() => (formContainer.style.display = 'none'), 500);
    //   } else {
    formContainer.style.display = 'flex';
    setTimeout(() => formContainer.classList.add('visible'), 10);
    overlay.classList.add('active');
    // }
    // }
  });
}
showForm();

function hideForm() {
  const closeButton = document.querySelector('#back-button');
  const formContainer = document.querySelector('.visitor-form');

  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    formContainer.classList.remove('visible');
    setTimeout(() => (formContainer.style.display = 'none'), 500);
    overlay.classList.remove('active');
  });
}
hideForm();
