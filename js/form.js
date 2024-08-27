const form = document.querySelector(".counter__form");
const ageInputElement = form.querySelector("#age");
const heightInputElement = form.querySelector("#height");
const weightInputElement = form.querySelector("#weight");

const submitButtonElement = document.querySelector(".form__submit-button");
const resetButtonElement = document.querySelector(".form__reset-button");

const enableButton = (button) => {
  button.removeAttribute("disabled");
};

const disableButton = (button) => {
  button.setAttribute("disabled", "");
};

form.addEventListener("change", () => {
  if (
    ageInputElement.value.length > 0 &&
    heightInputElement.value.length > 0 &&
    weightInputElement.value.length > 0
  ) {
    enableButton(submitButtonElement);
  } else {
    disableButton(submitButtonElement);
  }

  if (
    ageInputElement.value.length > 0 ||
    heightInputElement.value.length > 0 ||
    weightInputElement.value.length > 0
  ) {
    enableButton(resetButtonElement);
  } else {
    disableButton(resetButtonElement);
  }
});
