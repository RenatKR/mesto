export default class Card {
  constructor({ item, handleCardClick }, selector) {
    this._title = item.name;
    this._src = item.link;
    this._alt = item.alt;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
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

  _setEventListenerRemove() {
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._removeOption();
    })
  }

  _removeOption() {
    this._element.remove();
    this._element = null;
  }

  _setEventListenerPopupImgOpen() {
    this._element.querySelector('.card__photo').addEventListener('click', () => {
      this._handleCardClick(this._title, this._src, this._alt);
    });
  }

  renderCard() {
    this._element = this._getTemplate();
    this._setEventListenerPopupImgOpen();
    this._setEventListenerLike();
    this._setEventListenerRemove();
    this._element.querySelector('.card__title').textContent = this._title;
    this._photo = this._element.querySelector('.card__photo');
    this._photo.src = this._src;
    this._photo.alt = this._alt;
    return this._element;
  }
}