export default class Card {
  constructor({ item, handleCardClick, handleTrashClick, handleLikeClickAdd, handleLikeClickRemove }, selector) {
    this._title = item.name;
    this._src = item.link;
    this._alt = item.name;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._cardId = item._id;
    this._ownerId = item.owner._id
    this._likes = item.likes.length;
    this._handleLikeClickAdd = handleLikeClickAdd;
    this._handleLikeClickRemove = handleLikeClickRemove;
    this._likesArray = item.likes;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _setEventListenerLike() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this.handleLikeClickMain();

    })
  }

  _setEventListenerRemove() {
    this._element.querySelector('.card__trash').addEventListener('click', () => {
      this._handleTrashClick();
    })
  }

  removeOption() {
    this._element.remove();
    this._element = null;
  }

  _setEventListenerPopupImgOpen() {
    this._element.querySelector('.card__photo').addEventListener('click', () => {
      this._handleCardClick(this._title, this._src, this._alt);
    });
  }

  renderCard() {
    if (this._ownerId === '4c1e26ebaa11b3709355e511') {
      this._element = this._getTemplate();
      this._setEventListenerPopupImgOpen();
      this._setEventListenerLike();
      this._setEventListenerRemove();
      this._element.querySelector('.card__title').textContent = this._title;
      this._photo = this._element.querySelector('.card__photo');
      this._photo.src = this._src;
      this._photo.alt = this._alt;
      this._element.querySelector('.card__like-counter').textContent = this._likes;
      return this._element;
    } else {
      this._element = this._getTemplate();
      this._element.querySelector('.card__trash').remove();
      this._setEventListenerPopupImgOpen();
      this._setEventListenerLike();
      this._element.querySelector('.card__title').textContent = this._title;
      this._photo = this._element.querySelector('.card__photo');
      this._photo.src = this._src;
      this._photo.alt = this._alt;
      this._element.querySelector('.card__like-counter').textContent = this._likes;
      return this._element;
    }
  }

  getCardId() {
    const cardId = this._cardId;
    return cardId;
  }

  setNumLiketoCard(number) {
    this._element.querySelector('.card__like-counter').textContent = number;
  }

  handleLikeToggle() {
    if (this._likesArray.find(item => item._id === '4c1e26ebaa11b3709355e511')) {
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  }

  handleLikeClickMain() {
    if (this._element.querySelector('.card__like').classList.contains('card__like_active')) {
      this._handleLikeClickRemove(this._cardId);
      this._element.querySelector('.card__like').classList.toggle('card__like_active');

    } else {
      this._handleLikeClickAdd(this._cardId);
      this._element.querySelector('.card__like').classList.toggle('card__like_active');
    }
  }
}