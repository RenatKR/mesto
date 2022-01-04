import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._img = this._popup.querySelector('.popup-image__img');
  }

  open(item) {
    super.open();
    this._img.src = '';
    this._popup.querySelector('.popup-image__title').textContent = item.name;
    this._img.src = item.link;
    this._img.alt = item.alt;
  }
}