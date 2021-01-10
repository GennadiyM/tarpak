var mobMenu = function () {
  var Selector = {
    HEADER_TOGGLE: '.js-header-toggle',
    HEADER: '.js-header',
    PAGE: '.page'
  };

  var Class = {
    HEADER_OPEN: 'pageHeader_open',
    NO_SCROLL: 'page_no-scroll',
  };

  var headerToggle = document.querySelector(Selector.HEADER_TOGGLE);

  if (!headerToggle) {
    return;
  }
  var header = document.querySelector(Selector.HEADER);
  var page = document.querySelector(Selector.PAGE);

  var getToggleVisibleMenu = function () {
    header.classList.toggle(Class.HEADER_OPEN);
    page.classList.toggle(Class.NO_SCROLL);
  };

  var onClickToggle = function (evt) {
    evt.preventDefault();
    getToggleVisibleMenu();
  };

  headerToggle.addEventListener('click', onClickToggle);
};

export default mobMenu;
