const btn = document.querySelector(".form__btn");
const error = document.querySelector(".form__error");
const input = document.querySelector(".form__input");

input.addEventListener("change", (e) => {
  e.preventDefault();

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(input.value).toLowerCase())) {
    error.setAttribute("src", "images/icon-error.svg");
  } else {
    error.setAttribute("src", "");
  }
});
