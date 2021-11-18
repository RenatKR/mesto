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
  forms.forEach(function(form) {
    setEventListenertoForm(form, obj)});
  const inputs = Array.from(document.querySelectorAll(obj.inputSelector));
  inputs.forEach(function (input) {
    setEventListenertoInput(input, obj)})
}
  
function setEventListenertoInput(input, obj) {
  input.addEventListener('input', function(evt) {checkInputValidation(evt, obj)});
}
  
function checkInputValidation(evt, obj) {
  if (!evt.target.validity.valid) {
    showInputError(evt, obj);
    } else {
    hideInputError(evt, obj);
  }
}
  
function showInputError(evt, obj) {
  evt.target.classList.add(obj.inputErrorClass);
  const spanError = document.querySelector(`.${evt.target.id}-error`);
  spanError.classList.add(obj.errorClass);
  spanError.textContent = evt.target.validationMessage;
}
  
function hideInputError(evt, obj) {
  evt.target.classList.remove(obj.inputErrorClass);
  const spanError = document.querySelector(`.${evt.target.id}-error`);
  spanError.classList.remove(obj.errorClass);
  spanError.textContent = ''
}
  
//активация/дезактивация кнопки
  
function setEventListenertoForm(form, obj) {
  form.addEventListener('input', function(evt) {handleFormInput(evt, obj)});
  const button = form.querySelector(obj.submitButtonSelector);
  toggleButton(form, obj);
}
  
function handleFormInput(evt, obj) {
  toggleButton(evt.currentTarget, obj);
}
  
function toggleButton(form, obj) {
  const button = form.querySelector(obj.submitButtonSelector);
  const isFormValid = !form.checkValidity();
  button.disabled = isFormValid;
  button.classList.toggle(obj.inactiveButtonClass, isFormValid);
}