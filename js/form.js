import { enableButton, disableButton } from './buttons.js';

const activityRatio = {
  'activity-minimal': 1.2,
  'activity-low': 1.375,
  'activity-medium': 1.55,
  'activity-high': 1.725,
  'activity-maximal': 1.9,
};

const form = document.querySelector('.counter__form');
const ageInputElement = form.querySelector('#age');
const heightInputElement = form.querySelector('#height');
const weightInputElement = form.querySelector('#weight');

const submitButtonElement = form.querySelector('.form__submit-button');
const resetButtonElement = form.querySelector('.form__reset-button');

const resultElement = document.querySelector('.counter__result');
const caloriesNormEement = resultElement.querySelector('#calories-norm');
const caloriesMinimalEement = resultElement.querySelector('#calories-minimal');
const caloriesMaximalEement = resultElement.querySelector('#calories-maximal');

// Клик на кнопку "Рассчитать"

submitButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  resultElement.classList.remove('counter__result--hidden');
});

// Клик на кнопку "Очистить поля и расчет"

resetButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.reset();
  disableButton(submitButtonElement);
  disableButton(resetButtonElement);
  resultElement.classList.add('counter__result--hidden');
});

// Функция расчета калорий

const countCalories = () => {
  let n = 0;

  if (document.getElementById('gender-male').checked) {
    n =
      10 * weightInputElement.value +
      6.25 * heightInputElement.value -
      5 * ageInputElement.value +
      5;
  } else if (document.getElementById('gender-female').checked) {
    n =
      10 * weightInputElement.value +
      6.25 * heightInputElement.value -
      5 * ageInputElement.value -
      161;
  }

  let result = 0;

  if (document.getElementById('activity-minimal').checked) {
    result = n * activityRatio['activity-minimal'];
  } else if (document.getElementById('activity-low').checked) {
    result = n * activityRatio['activity-low'];
  } else if (document.getElementById('activity-medium').checked) {
    result = n * activityRatio['activity-medium'];
  } else if (document.getElementById('activity-high').checked) {
    result = n * activityRatio['activity-high'];
  } else if (document.getElementById('activity-maximal').checked) {
    result = n * activityRatio['activity-maximal'];
  }

  result = Math.round(result);

  const persent = (result / 100) * 15;
  const weightLossNorm = Math.round(result - persent);
  const weightGainNorm = Math.round(result + persent);

  caloriesNormEement.textContent = result;
  caloriesMinimalEement.textContent = weightLossNorm;
  caloriesMaximalEement.textContent = weightGainNorm;
};

// Проверка на заполненность числовых полей формы / активация / дизактивация кнопок / расчет калорий

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

  countCalories();
});
