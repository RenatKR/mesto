import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selector, { handleSubmitForm }) {
    super(selector);
    this._handleSubmitForm = handleSubmitForm;
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', (evt) => super.close());
    this._popup.addEventListener('mousedown', closePopupOnOverlay)

    function closePopupOnOverlay(evt) {
      if (evt.target === evt.currentTarget) {
        evt.target.classList.remove('popup_is-opened');
      }
    }
    this._popup.querySelector('.popup__submit-form').addEventListener('submit', (evt) => this._handleSubmitForm(evt));
  }

  _getInputValues() {
    const InputValues = Object.assign({}, (Array.from(this._popup.querySelectorAll('.popup__input')).map(inputElement => inputElement.value)));
    const {
      0: name,
      1: job
    } = InputValues;
    return ({ name, job });
  }

  setValues({ name, job }) {
    this._popup.querySelector('.popup__input_type_name').value = name;
    this._popup.querySelector('.popup__input_type_job').value = job;
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    this._popup.querySelector('.popup__submit-form').reset();
  }
}