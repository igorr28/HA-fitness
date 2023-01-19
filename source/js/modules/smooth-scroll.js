const scrollTo = () => {
  const smoothLinks = document.querySelectorAll('[data-scroll]');
  if (smoothLinks.length) {
    for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const href = smoothLink.getAttribute('href');
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }
};

export {scrollTo};
