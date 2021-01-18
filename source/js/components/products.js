import Swiper from 'swiper';

var products = function () {
  var Selector = {
    PRODUCTS: '.js-products',
    PRODUCTS_SLIDER: '.swiper-container',
    SWIPER_PAGINATION: '.products__swiper-pagination',
    nextEl: '.products__btn_prev',
    prevEl: '.products__btn_next',
  };

  var Class = {
    BULLET: 'bullet',
    BULLET_ACTIVE: 'bullet--active',
  };

  var products = document.querySelector(Selector.PRODUCTS);

  if (!products) {
    return false;
  }

  var swiperPagination = products.querySelectorAll(Selector.SWIPER_PAGINATION);
  var productsSlider = products.querySelector(Selector.PRODUCTS_SLIDER);
  var btnPrev = products.querySelector(Selector.nextEl);
  var btnNext = products.querySelector(Selector.prevEl);

  var productsSwiper = new Swiper(productsSlider, {
    keyboard: true,
    simulateTouch: false,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: btnPrev,
      prevEl: btnNext,
    },
    pagination: {
      el: swiperPagination,
      clickable: true,
      bulletClass: Class.BULLET,
      bulletActiveClass: Class.BULLET_ACTIVE,
    },
    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
  });

  return productsSwiper;
};

export default products;
