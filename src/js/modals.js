$(document).ready(function () {
  $("[data-modal='consultation']").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #comsultation, #thanks-messege, #order").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__title").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
});
