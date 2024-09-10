import { toggleButtonState } from './buttons.js';
import { calculateCalories } from './calculate-calories.js';

const form = document.querySelector('.counter__form');
const ageInputElement = form.querySelector('#age');
const heightInputElement = form.querySelector('#height');
const weightInputElement = form.querySelector('#weight');

const submitButtonElement = form.querySelector('.form__submit-button');
const resetButtonElement = form.querySelector('.form__reset-button');

const resultElement = document.querySelector('.counter__result');

// Проверка на заполненность числовых полей формы для активации / дизактивации кнопок

const areFilledIn = () => {
  if (
    ageInputElement.value.length > 0 &&
    heightInputElement.value.length > 0 &&
    weightInputElement.value.length > 0
  ) {
    toggleButtonState(submitButtonElement, false);
  } else {
    toggleButtonState(submitButtonElement, true);
  }

  if (
    ageInputElement.value.length > 0 ||
    heightInputElement.value.length > 0 ||
    weightInputElement.value.length > 0
  ) {
    toggleButtonState(resetButtonElement, false);
  } else {
    toggleButtonState(resetButtonElement, true);
  }
};

// Клик на кнопку "Рассчитать"

submitButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resultElement.classList.remove('counter__result--hidden');
});

// Клик на кнопку "Очистить поля и расчет"

resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  toggleButtonState(submitButtonElement, true);
  toggleButtonState(resetButtonElement, true);
  resultElement.classList.add('counter__result--hidden');
});

// Расчет калорий при изменении значений в полях ввода формы

form.addEventListener('change', () => {
  areFilledIn();
  calculateCalories(weightInputElement, heightInputElement, ageInputElement);
});
