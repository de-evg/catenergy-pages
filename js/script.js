// Переключение главного меню
if (document.querySelector(".main-menu") !== null) {
  var navMain = document.querySelector(".main-menu");
  var navToggle = document.querySelector(".burger-menu");

  navMain.classList.remove("main-menu--no-js");
  navToggle.classList.remove("burger-menu--no-js");

  navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("burger-menu--opened");
    navMain.classList.toggle("main-menu--opened");
  });
}

// Переключение слайдера в мобильной версии
if (document.querySelector(".slider") !== null) {
  var sliderButton = document.querySelectorAll(".slider__button");
  var sliderToggle = document.querySelector(".slider__toggle-item")
  var sliderImage = document.querySelectorAll(".slider__images-container");

  sliderButton[1].addEventListener("click", function() {
    if (!sliderButton[1].classList.contains("slider__button--current")) {
      sliderButton[0].classList.remove("slider__button--current");
      sliderButton[1].classList.add("slider__button--current");
      sliderToggle.classList.toggle("slider__toggle-item--right");
      if (!sliderImage[1].classList.contains("slider__images-container--current")) {
        sliderImage[0].classList.remove("slider__images-container--current");
        sliderImage[1].classList.add("slider__images-container--current");
      };
    }
  })

  sliderButton[0].addEventListener("click", function() {
    if (!sliderButton[0].classList.contains("slider__button--current")) {
      sliderButton[1].classList.remove("slider__button--current");
      sliderButton[0].classList.add("slider__button--current");
      sliderToggle.classList.toggle("slider__toggle-item--right");
      if (!sliderImage[0].classList.contains("slider__images-container--current")) {
        sliderImage[1].classList.remove("slider__images-container--current");
        sliderImage[0].classList.add("slider__images-container--current");
      };
    }
  })
}

// Ошибка при незаполненной форме заполнении формы
if (document.querySelector(".program-form") !== null) {
  var formSubmit = document.querySelector(".program-form__button-submit");
  var requiredInput = document.querySelectorAll("[required]");

  formSubmit.addEventListener("click", function () {
    for (var i = 0; i < requiredInput.length; i++) {
      if (requiredInput[i].value == "") {
        requiredInput[i].classList.add("program-form__input--error");
        requiredInput[i].focus();
      } else {
        requiredInput[i].classList.remove("program-form__input--error");
      }
    }
  })
}
