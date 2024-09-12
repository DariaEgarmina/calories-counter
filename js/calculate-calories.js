import { addSpaces } from './util.js';

const activityRatio = {
  'activity-minimal': 1.2,
  'activity-low': 1.375,
  'activity-medium': 1.55,
  'activity-high': 1.725,
  'activity-maximal': 1.9,
};

const caloriesNormElement = document.querySelector('#calories-norm');
const caloriesMinimalElement = document.querySelector('#calories-minimal');
const caloriesMaximalElement = document.querySelector('#calories-maximal');

// Функция расчета калорий

const calculateCalories = (weightInputElement, heightInputElement, ageInputElement) => {
  let n = 10 * weightInputElement.value +
    6.25 * heightInputElement.value -
    5 * ageInputElement.value;

  if (document.querySelector('#gender-male').checked) {
    n = n + 5;
  } else if (document.querySelector('#gender-female').checked) {
    n = n - 161;
  }

  const radioId = document.querySelector('[name="activity"]:checked').id;
  const result = Math.round(n * activityRatio[radioId]);

  const percent = (result / 100) * 15;
  const weightLossNorm = addSpaces(Math.round(result - percent));
  const weightGainNorm = addSpaces(Math.round(result + percent));

  caloriesNormElement.textContent = addSpaces(result);
  caloriesMinimalElement.textContent = weightLossNorm;
  caloriesMaximalElement.textContent = weightGainNorm;
};

export { calculateCalories };
