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

document
  .querySelector(".nav-dots__item_0")
  .addEventListener("click", function (e) {
    slider.goTo("0");
    if (
      !document
        .querySelector(".nav-dots__item_0")
        .classList.contains("nav-dots__item_active")
    ) {
      for (let sibling of document.querySelector(".nav-dots__item_0").parentNode
        .children) {
        sibling.classList.remove("nav-dots__item_active");
      }

      document
        .querySelector(".nav-dots__item_0")
        .classList.toggle("nav-dots__item_active");
    }
  });

document
  .querySelector(".nav-dots__item_1")
  .addEventListener("click", function (e) {
    slider.goTo("1");
    if (
      !document
        .querySelector(".nav-dots__item_1")
        .classList.contains("nav-dots__item_active")
    ) {
      for (let sibling of document.querySelector(".nav-dots__item_1").parentNode
        .children) {
        sibling.classList.remove("nav-dots__item_active");
      }

      document
        .querySelector(".nav-dots__item_1")
        .classList.toggle("nav-dots__item_active");
    }
  });

document
  .querySelector(".nav-dots__item_2")
  .addEventListener("click", function (e) {
    slider.goTo("2");
    if (
      !document
        .querySelector(".nav-dots__item_2")
        .classList.contains("nav-dots__item_active")
    ) {
      for (let sibling of document.querySelector(".nav-dots__item_2").parentNode
        .children) {
        sibling.classList.remove("nav-dots__item_active");
      }

      document
        .querySelector(".nav-dots__item_2")
        .classList.toggle("nav-dots__item_active");
    }
  });
