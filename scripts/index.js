import {initialCards, config} from './initialData.js'

import {openPopup, closePopup, popupImg} from './utils.js'

import {Card} from './Card.js';

import {FormValidator} from './FormValidator.js';

//объявление переменных

const cards = document.querySelector('.cards');

const profilePopup = document.querySelector('.popup_profile');
const profilePopupForm = profilePopup.querySelector('.popup__submit-form')
const nameInput = profilePopup.querySelector('.popup__input_type_name');
const jobInput = profilePopup.querySelector('.popup__input_type_job');
const profilePopupCloseButton = profilePopup.querySelector('.popup__close');

const profileElement = document.querySelector('.profile');
const profileTitle = profileElement.querySelector('.profile__title');
const profileSubtitle = profileElement.querySelector('.profile__subtitle');
const profileEditButton = profileElement.querySelector('.profile__edit-button');

const cardAddButton = profileElement.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup-add');
const cardAddForm = cardAddPopup.querySelector('.popup__submit-form')
const placeInput = cardAddPopup.querySelector('.popup__input_type_place');
const srcInput = cardAddPopup.querySelector('.popup__input_type_src');
const cardAddPopupCloseButton = cardAddPopup.querySelector('.popup__close');
const cardAddFormButton = cardAddPopup.querySelector('.popup__save');

const popupImgButtonClose = popupImg.querySelector('.popup__close');

function createCard(item) {
  const card = new Card(item.name, item.link, item.alt, 'template');
  const cardElement = card.renderCard();
  return cardElement;
}

initialCards.forEach ((item) => {
  cards.appendChild(createCard(item));
})

const profilePopupFormValidator = new FormValidator(profilePopupForm, config);

profilePopupFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(cardAddForm, config);

cardAddFormValidator.enableValidation();

//profilePopup

const profilePopupOpen = function() {
  openPopup(profilePopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const profilePopupClose = function() {
  closePopup(profilePopup);
}

profileEditButton.addEventListener('click', profilePopupOpen);

profilePopupCloseButton.addEventListener('click', profilePopupClose);

const submitProfileForm = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profilePopupForm.addEventListener('submit', submitProfileForm);

// popupAddCard

const cardAddPopupOpen = function() {
  openPopup(cardAddPopup);
}

const cardAddPopupClose = function() {
  closePopup(cardAddPopup);
}

cardAddButton.addEventListener('click', function(evt) {
  cardAddPopupOpen(evt);
});

cardAddPopupCloseButton.addEventListener('click', cardAddPopupClose);

function addCardStart(el) {
  cards.prepend(el);
}

const submitAddCardForm = function(evt) {
  evt.preventDefault();
  const item = {
    name: placeInput.value,
    link: srcInput.value,
    alt: placeInput.value,
  }
  addCardStart(createCard(item));
  closePopup(cardAddPopup);
  srcInput.value = "";
  placeInput.value = "";
  cardAddFormValidator.toggleButton();
  cardAddFormButton.classList.add(config.inactiveButtonClass)
}

cardAddForm.addEventListener('submit', submitAddCardForm);

// PopupImg

const popupImgClose = function() {
  closePopup(popupImg);
}

popupImgButtonClose.addEventListener('click', popupImgClose);

// закрытие попапа по оверлею

const popups = Array.from(document.querySelectorAll('.popup'));

popups.forEach(function(popup) {
  popup.addEventListener('mousedown', closePopupOnOverlay);
})

function closePopupOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}