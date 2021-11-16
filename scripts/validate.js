//sprint 6

//валидация формы редактирования профиля

const config = {
  formSelector: '.popup__form', //формы
  inputSelector: '.popup__input', //инпуты
  submitButtonSelector: '.popup__button', //кнопки
  inactiveButtonClass: 'popup__button_disabled', //стиль неактивной кнопки
  inputErrorClass: 'popup__input_type_error', //стиль невалидного инпута
  errorClass: 'popup__error_visible' //класс текстовой ошибки
};
  
enableValidation(config);
  
function enableValidation(obj) {
  const forms = Array.from(document.querySelectorAll(obj.formSelector));
  forms.forEach(setEventListenertoForm);
  const inputs = Array.from(document.querySelectorAll(obj.inputSelector));
  inputs.forEach(setEventListenertoInput);
}
  
function setEventListenertoInput(input) {
  input.addEventListener('input', checkInputValidation);
}
  
function checkInputValidation(evt) {
  if (!evt.target.validity.valid) {
    showInputError(evt);
    } else {
    hideInputError(evt);
  }
}
  
function showInputError(evt) {
  evt.target.classList.add(config.inputErrorClass);
  const spanError = document.querySelector(`.${evt.target.id}-error`);
  spanError.classList.add(config.errorClass);
  spanError.textContent = evt.target.validationMessage;
}
  
function hideInputError(evt) {
  evt.target.classList.remove(config.inputErrorClass);
  const spanError = document.querySelector(`.${evt.target.id}-error`);
  spanError.classList.remove(config.errorClass);
  spanError.textContent = ''
}
  
// активация/дезактивация кнопки
  
function setEventListenertoForm(form) {
  form.addEventListener('input', handleFormInput);
  const button = form.querySelector(config.submitButtonSelector);
  toggleButton(form);
}
  
function handleFormInput(evt) {
  toggleButton(evt.currentTarget);
}
  
function toggleButton(form) {
  const button = form.querySelector(config.submitButtonSelector);
  const isFormValid = !form.checkValidity();
  button.disabled = isFormValid;
  button.classList.toggle(config.inactiveButtonClass, isFormValid);
}