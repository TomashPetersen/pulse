$(document).ready(function () {
  $(".carousel__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icons/right-arrow.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
