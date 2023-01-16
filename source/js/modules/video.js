const videos = Array.from(document.querySelectorAll('[data-video]'));

const createIframe = (link) => {
  const iframe = document.createElement('iframe');
  iframe.src = `${link}`;
  return iframe;
};

const initVideo = (video) => {
  const link = video.querySelector('[data-video-link]');
  const play = video.querySelector('[data-video-play]');
  const href = link.href;
  link.removeAttribute('href');
  const iframe = createIframe(href);
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('frameborder', '0');
  video.appendChild(iframe);


  if (play) {
    play.addEventListener('click', function () {
      video.classList.add('is-active');
      iframe.src = `${href}?autoplay=1`;
    });
  }
};

const initVideos = () => {
  if (videos.length) {
    videos.forEach((video) => {
      initVideo(video);
    });
  }
};

export {initVideos};
