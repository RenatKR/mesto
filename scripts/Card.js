import {openPopup, popupImg, popupImgImg, popupImgTitle} from './index.js'

export class Card {
  constructor(title, src, alt) {
    this._title = title;
    this._src = src;
    this._alt = alt;
  }

  _getTemplate () {
    const cardElement = document.querySelector('#card').content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _setEventListenerLike() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._likeOption();
    })
  }

  _likeOption() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  _setEventListenerRemove () {
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._removeOption();
    })
  }

  _removeOption() {
    this._element.querySelector('.card__trash').closest('.card').remove();
  }

  _openPopupImg() {
    openPopup(popupImg);
    popupImgImg.src = this._src;
    popupImgImg.alt = this._alt;
    popupImgTitle.textContent = this._title;
  }

  _setEventListenerPopupImgOpen() {
    this._element.querySelector('.card__photo').addEventListener('click', () => {
      this._openPopupImg();
    })
  }

  renderCard () {
    this._element = this._getTemplate();
    this._setEventListenerLike();
    this._setEventListenerRemove();
    this._setEventListenerPopupImgOpen();
    this._element.querySelector('.card__title').textContent = this._title;
    this._element.querySelector('.card__photo').src = this._src;
    this._element.querySelector('.card__photo').alt = this._alt;
    return this._element;
  }
}