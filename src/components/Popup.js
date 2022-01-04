export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose);
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') { this.close() };
  }

  _setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', (evt) => this.close());
    this._popup.addEventListener('mousedown', this._closePopupOnOverlay);
  }

  _closePopupOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      evt.target.classList.remove('popup_is-opened');
    }
  }
}