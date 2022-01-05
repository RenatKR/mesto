import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, { handleSubmitForm }) {
    super(selector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__submit-form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      if (data.hasOwnProperty(input.name)) {
        input.value = data[input.name]
      }
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  loading(isLoading) {
    if (isLoading) {
      this._form.querySelector('.popup__save').textContent = 'Сохранение...';
    } else {
      this._form.querySelector('.popup__save').textContent = 'Сохранить';
    }
  }

}