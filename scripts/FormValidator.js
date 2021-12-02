export class FormValidator {
  constructor (form, config) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

  }

  enableValidation(form, config) {
    this._setEventListenertoForm(form, config);
    this._inputList.forEach((input) => this._setEventListenertoInput(input, config))
  }

  _setEventListenertoForm() {
    this._form.addEventListener('input', () => {this._handleFormInput()});
    this.toggleButton();
  }
  
  _handleFormInput() {
    this.toggleButton();
  }
  
  toggleButton() {
    const isFormValid = !this._form.checkValidity();
    this._submitButton.disabled = isFormValid;
    this._submitButton.classList.toggle(this._inactiveButtonClass, isFormValid);
  }

  _setEventListenertoInput(input) {
    input.addEventListener('input', (evt) => {this._checkInputValidation(evt)});
  }

  _checkInputValidation(evt) {
    if (!evt.target.validity.valid) {
      this._showInputError(evt);
      } else {
      this._hideInputError(evt);
    }
  }

  _showInputError(evt) {
    evt.target.classList.add(this._inputErrorClass);
    const spanError = this._form.querySelector(`.${evt.target.id}-error`);
    spanError.classList.add(this._errorClass);
    spanError.textContent = evt.target.validationMessage;
  }
  
  _hideInputError(evt) {
    evt.target.classList.remove(this._inputErrorClass);
    const spanError = this._form.querySelector(`.${evt.target.id}-error`);
    spanError.classList.remove(this._errorClass);
    spanError.textContent = ''
  }
}