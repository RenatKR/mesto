export class FormValidator {
  constructor (form, config) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

enableValidation(form, config) {

  this._setEventListenertoForm(form, config);
  const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  inputs.forEach((input) => this._setEventListenertoInput(input, config))
  }

_setEventListenertoForm(form, config) {
  form.addEventListener('input', (evt) => {this._handleFormInput(evt, config)});
  const button = this._form.querySelector(this._submitButtonSelector);
  this._toggleButton(form, config);
  }
  
_handleFormInput(evt, config) {
  this._toggleButton(evt.currentTarget, config);
  }
  
_toggleButton(form, config) {
  const button = this._form.querySelector(this._submitButtonSelector);
  const isFormValid = !this._form.checkValidity();
  button.disabled = isFormValid;
  button.classList.toggle(this._inactiveButtonClass, isFormValid);
  }

  _setEventListenertoInput(input, config) {
    input.addEventListener('input', (evt) => {this._checkInputValidation(evt, config)});
  }

  _checkInputValidation(evt, config) {
    if (!evt.target.validity.valid) {
      this._showInputError(evt, config);
      } else {
      this._hideInputError(evt, config);
    }
  }

  _showInputError(evt, config) {
    evt.target.classList.add(this._inputErrorClass);
    const spanError = this._form.querySelector(`.${evt.target.id}-error`);
    spanError.classList.add(this._errorClass);
    spanError.textContent = evt.target.validationMessage;
  }
  
  _hideInputError(evt, config) {
    evt.target.classList.remove(this._inputErrorClass);
    const spanError = this._form.querySelector(`.${evt.target.id}-error`);
    spanError.classList.remove(this._errorClass);
    spanError.textContent = ''
  }
}