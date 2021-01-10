var headerScroll = function () {
  var Selector = {
    HEADER: '.js-header',
  };

  var Class = {
    HEADER_SCROLL: 'pageHeader_scroll',
  };

  var newScrollTop = window.pageYOffset;
  var header = document.querySelector(Selector.HEADER);

  if (newScrollTop > 0) {
    header.classList.add(Class.HEADER_SCROLL)
  }

  function scrollHeader () {
    window.setInterval(() => {
      newScrollTop = window.pageYOffset;

      if (document.body.classList.contains('page_no-scroll')) return;
      
      if (newScrollTop > 0) {
        header.classList.add(Class.HEADER_SCROLL)
      } else {
        header.classList.remove(Class.HEADER_SCROLL)
      }
    }, 50);

    document.removeEventListener('scroll', scrollHeader);
  };

  document.addEventListener('scroll', scrollHeader);
};

export default headerScroll;
