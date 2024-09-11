//Функция для добавления пробелов в числа

const addSpaces = (number, space, afterElement) => {
  const reverseArray = number.toString().split('').reverse();

  const reverseArrayLength = reverseArray.length;
  let newArray = [];

  for (let i = 1; reverseArray.length > 0; i++) {
    if (reverseArray.length > 0) {
      newArray.push(reverseArray.shift());
    }
    if (i % afterElement === 0 && i !== reverseArrayLength) {
      newArray.push(space);
    }
  }

  const resultArray = newArray.reverse();
  const resultString = resultArray.join('');

  return resultString;
};

export { addSpaces };
