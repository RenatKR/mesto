import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._img = this._popup.querySelector('.popup-image__img');
  }

  open(title, src, alt) {
    super.open();
    this._popup.querySelector('.popup-image__title').textContent = title;
    this._img.src = src;
    this._img.alt = alt;
  }
}