import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(title, src, alt, selector) {
    super(selector);
    this._src = src;
    this._title = title;
    this._alt = alt;
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    this._popup.querySelector('.popup-image__img').alt = this._alt;
    this._popup.querySelector('.popup-image__img').src = this._src;
    this._popup.querySelector('.popup-image__title').textContent = this._title;
    document.addEventListener('keydown', (evt) => { super._handleEscClose(evt) });
    super._setEventListeners();
  }
}