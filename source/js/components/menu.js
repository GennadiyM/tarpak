var mobMenu = function () {
  var Selector = {
    HEADER_TOGGLE: '.js-header-toggle',
    HEADER: '.js-header',
    PAGE: '.page',
    MAIN_NAV: '.pageHeader__dropdown'
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
  var mainNav = header.querySelector(Selector.MAIN_NAV);

  var getToggleVisibleMenu = function () {
    header.classList.toggle(Class.HEADER_OPEN);
    page.classList.toggle(Class.NO_SCROLL);
  };

  var onClickMainNav = function () {
    getToggleVisibleMenu();
    mainNav.removeEventListener('click', onClickMainNav);
  };

  var onClickToggle = function (evt) {
    evt.preventDefault();
    getToggleVisibleMenu();
    mainNav.addEventListener('click', onClickMainNav);
  };

  headerToggle.addEventListener('click', onClickToggle);
};

export default mobMenu;
