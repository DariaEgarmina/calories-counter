const form = document.querySelector('.counter__form');
const ageInputElement = form.querySelector('#age');
const heightInputElement = form.querySelector('#height');
const weightInputElement = form.querySelector('#weight');

const submitButtonElement = form.querySelector('.form__submit-button');
const resetButtonElement = form.querySelector('.form__reset-button');

const resultElement = document.querySelector('.counter__result');

const enableButton = (button) => {
  button.removeAttribute("disabled");
};

const disableButton = (button) => {
  button.setAttribute("disabled", "");
};

form.addEventListener('change', () => {
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

submitButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    resultElement.classList.remove("counter__result--hidden");
    
    //либо обновляет расчёты, выводится актуальная информация.
});

 
