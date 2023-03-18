function noperevod(events) {
    events.preventDefault();
  };

let popup = document.getElementById("modal");
let popupClose = document.getElementById("modal__close");
let popup_body = document.getElementById("modal__wrapper");
let popup_button = document.getElementById("modal__button");

popupClose.onclick = function () {
  popup_body.style.display = "none";
};
popupClose.onclick = function () {
  popup_body.style.display = "none";
};
popup_button.onclick = function () {
  popup_body.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup_body) {
    popup_body.style.display = "none";
  }
};