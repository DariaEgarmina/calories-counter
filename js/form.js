const form = document.querySelector('.counter__form');
const ageInputElement = form.querySelector('#age');
const heightInputElement = form.querySelector('#height');
const weightInputElement = form.querySelector('#weight');

const submitButtonElement = form.querySelector('.form__submit-button');
const resetButtonElement = form.querySelector('.form__reset-button');

const resultElement = document.querySelector('.counter__result');

// Функции для активации / дизактивации кнопок

const enableButton = (button) => {
  button.removeAttribute("disabled");
};

const disableButton = (button) => {
  button.setAttribute("disabled", "");
};

// Проверка на заполненность числовых полей формы и активация / дизактивация кнопок

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

// Клик на кнопку "Рассчитать"

submitButtonElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    resultElement.classList.remove("counter__result--hidden");
    
    //либо обновляет расчёты, выводится актуальная информация.
});

// Клик на кнопку "Очистить поля и расчет"

resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  disableButton(submitButtonElement);
  disableButton(resetButtonElement);

  // Обнуляется расчет
  resultElement.classList.add("counter__result--hidden");
});

 
