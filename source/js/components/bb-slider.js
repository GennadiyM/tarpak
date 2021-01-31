import Swiper from 'swiper';

var bb = function () {
  var Selector = {
    BB: '.js-bb',
    BB_SLIDER: '.swiper-container',
    SWIPER_PAGINATION: '.bb-slider__swiper-pagination',
    nextEl: '.bb-slider__btn_prev',
    prevEl: '.bb-slider__btn_next',
  };

  var Class = {
    BULLET: 'bullet',
    BULLET_ACTIVE: 'bullet--active',
  };

  var bb = document.querySelector(Selector.BB);

  if (!bb) {
    return false;
  }

  var swiperPagination = bb.querySelectorAll(Selector.SWIPER_PAGINATION);
  var bbSlider = bb.querySelector(Selector.BB_SLIDER);
  var btnPrev = bb.querySelector(Selector.nextEl);
  var btnNext = bb.querySelector(Selector.prevEl);

  var bbSwiper = new Swiper(bbSlider, {
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
  });

  return bbSwiper;
};

export default bb;
