// Функции для активации / дизактивации кнопок

const enableButton = (button) => {
  button.removeAttribute("disabled");
};

const disableButton = (button) => {
  button.setAttribute("disabled", "");
};

export { enableButton, disableButton };
