

const initTabs = () => {
  const tabsButtons = document.querySelectorAll('[data-ticket-btn]');
  const tabsContents = document.querySelectorAll('[data-ticket-content]');

  if (tabsButtons.length) {
    tabsButtons.forEach((tabsButton) => {
      tabsButton.addEventListener('click', (e) => {
        const tabValue = e.target.dataset.ticketBtn;
        tabsButtons.forEach((elem) => {
          elem.parentElement.classList.remove('is-active');
        });
        e.target.parentElement.classList.add('is-active');

        tabsContents.forEach((tabsContent) => {
          tabsContent.classList.remove('is-active');
        });
        document.querySelector(`[data-ticket-content="${tabValue}"]`).classList.add('is-active');
      });
    });
  }
};

export {initTabs};
