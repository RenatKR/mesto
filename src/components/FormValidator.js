export default class FormValidator {
  constructor(form, config) {
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

  enableValidation() {
    this._inputList.forEach((input) => this._setEventListenertoInput(input))
  }

  _setEventListenertoInput(input) {
    input.addEventListener('input', (evt) => {
      this._checkInputValidation(evt)
      this.toggleButton()
    })
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

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButton() {
    const isFormValid = this._hasInvalidInput();
    this._submitButton.disabled = isFormValid;
    this._submitButton.classList.toggle(this._inactiveButtonClass, isFormValid);
  }
}