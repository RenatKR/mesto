import Popup from './Popup.js';

export default class PopupConfirmDel extends Popup {
  constructor(selector, { handleSubmit }) {
    super(selector);
    this._handleSubmit = handleSubmit;
  }

  open(card) {
    super.open();
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector('.popup__button').addEventListener('click', () => {
      this._handleSubmit(this._card);
      super.close()
    });
  }
}