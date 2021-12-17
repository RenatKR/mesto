export default class Popup {
  constructor(selector) {
    this._popup = document.querySelector(selector);
  }

  open() {
    this._popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    this._setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
    document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') { this.close() };
  }

  _setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', (evt) => this.close());
    this._popup.addEventListener('mousedown', closePopupOnOverlay)

    function closePopupOnOverlay(evt) {
      if (evt.target === evt.currentTarget) {
        evt.target.classList.remove('popup_is-opened');
      }
    }
  }
}