$(document).ready(function () {
  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символов"),
        },
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Введите свою почту в формате name@domain.com",
        },
      },
    });
  }

  validateForm("#consultation .feed-form");
  validateForm("#order .feed-form");
  validateForm("#consultation-form");
});
