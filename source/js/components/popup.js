const popup = function () {
  const Selector = {
    BTN_OPEN_POPUP: `.js-btn`,
    POPUP: `.js-popup`,
    BTN_CLOSE_POPUP: `.js-close`,
    PAGE: `.page`,
    OVERLAY: `.js-overlay`
  };

  const Class = {
    POPUP_SHOW: `popup_show`,
    OVERLAY_SHOW: `overlay_show`,
    NO_SCROLL: `page_no-scroll`
  };

  const page = document.querySelector(Selector.PAGE);
  const popup = page.querySelector(Selector.POPUP);

  if (!popup) {
    return;
  }

  const btnOpenPopup = document.querySelectorAll(Selector.BTN_OPEN_POPUP);
  const btnClosePopup = popup.querySelector(Selector.BTN_CLOSE_POPUP);
  const inputName = popup.querySelector(`#name-p`);
  const overlay = page.querySelector(Selector.OVERLAY);

  const getClosePopup = function (evt) {
    evt.preventDefault();
    popup.classList.remove(Class.POPUP_SHOW);
    overlay.classList.remove(Class.OVERLAY_SHOW);
    page.classList.remove(Class.NO_SCROLL);
    btnClosePopup.removeEventListener('click', onClosePopup);
    overlay.removeEventListener('click', onClosePopup);

    btnOpenPopup.forEach((btn) => {
      btn.addEventListener(`click`, onClickBtnShowPopup);
    });
  };

  const onClickBtnShowPopup = function (evt) {
    evt.preventDefault();

    btnOpenPopup.forEach((btn) => {
      btn.removeEventListener(`click`, onClickBtnShowPopup);
    });

    popup.classList.add(Class.POPUP_SHOW);
    overlay.classList.add(Class.OVERLAY_SHOW);
    page.classList.add(Class.NO_SCROLL);
    window.addEventListener('keydown', onWindowKeydown);
    btnClosePopup.addEventListener('click', onClosePopup);
    overlay.addEventListener('click', onClosePopup);
    inputName.focus();
  };

  const onClosePopup = function (evt) {
    evt.preventDefault();
    getClosePopup(evt);
  };

  const onWindowKeydown = function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      getClosePopup(evt);
    }
    window.removeEventListener('keydown', onWindowKeydown);
  };

  btnOpenPopup.forEach((btn) => {
    btn.addEventListener(`click`, onClickBtnShowPopup);
  });
};

export default popup;
