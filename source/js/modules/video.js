const videos = Array.from(document.querySelectorAll('[data-video]'));

const createIframe = (link) => {
  const iframe = document.createElement('iframe');
  iframe.src = `${link}?autoplay=1`;
  return iframe;
};

const initVideo = (video) => {
  const link = video.querySelector('[data-video-link]');
  const play = video.querySelector('[data-video-play]');
  const href = link.href;
  link.removeAttribute('href');


  if (play) {
    play.addEventListener('click', function () {
      video.classList.add('is-active');
      const iframe = createIframe(href);
      video.appendChild(iframe);
    });
  }
};

videos.forEach((video) => {
  initVideo(video);
});
