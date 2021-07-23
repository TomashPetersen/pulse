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
    992: {
      nav: false,
    },
    320: {
      nav: true,
    },
  },
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});

// function togglerNavDots(item, listItem) {
//   document.querySelector(item).addEventListener("click", function (e) {
//     slider.goTo(listItem);
//     if (
//       !document.querySelector(item).classList.contains("nav-dots__item_active")
//     ) {
//       for (let sibling of document.querySelector(item).parentNode.children) {
//         sibling.classList.remove("nav-dots__item_active");
//       }

//       document.querySelector(item).classList.toggle("nav-dots__item_active");
//     }
//   });
// }

// togglerNavDots(".nav-dots__item_0", "0");
// togglerNavDots(".nav-dots__item_1", "1");
// togglerNavDots(".nav-dots__item_2", "2");

// function navDotsTogglerByRemoteSlide(sliderActiveId, navDotActiveClass) {
//   if (
//     document
//       .querySelector(sliderActiveId)
//       .classList.contains("tns-slide-active")
//   ) {
//     for (let sibling of document.querySelector(navDotActiveClass).parentNode
//       .children) {
//       sibling.classList.remove("nav-dots__item_active");
//     }
//     document
//       .querySelector(navDotActiveClass)
//       .classList.toggle("nav-dots__item_active");
//   }
// }

// navDotsTogglerByRemoteSlide("#tns1-item0", ".nav-dots__item_0");
