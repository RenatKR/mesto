export default class Card {
  constructor(userId, { item, handleCardClick, handleTrashClick, handleLikeClickAdd, handleLikeClickRemove }, selector) {
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
    this._user = userId;
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
    this._element = this._getTemplate();
    this._setEventListenerPopupImgOpen();
    this._setEventListenerLike();
    this._setEventListenerRemove();
    this._element.querySelector('.card__title').textContent = this._title;
    this._photo = this._element.querySelector('.card__photo');
    this._photo.src = this._src;
    this._photo.alt = this._alt;
    this._element.querySelector('.card__like-counter').textContent = this._likes;

    if (this._ownerId !== this._user) {
      this._element.querySelector('.card__trash').remove();
    }
    return this._element;
  }

  getCardId() {
    const cardId = this._cardId;
    return cardId;
  }

  setNumLiketoCard(number) {
    this._element.querySelector('.card__like-counter').textContent = number;
  }

  likeToggle() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  checkLikeToggle() {
    if (this._likesArray.find(item => item._id === this._user)) {
      this.likeToggle();
    }
  }

  handleLikeClickMain() {
    if (this._element.querySelector('.card__like').classList.contains('card__like_active')) {
      this._handleLikeClickRemove(this._cardId);

    } else {
      this._handleLikeClickAdd(this._cardId);
    }
  }
}