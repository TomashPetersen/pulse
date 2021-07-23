/* $(document).ready(function () {
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
}); */

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    992: {},
    320: {
      nav: true,
      controls: true,
    },
  },
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});
