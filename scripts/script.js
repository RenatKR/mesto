const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Горы'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Горный водоем зимой'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Панельные дома'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Сопки'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Одноколейные железнодородные пути'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Скалы у озера Байкал'
  }
];

//объявление переменных

const cardsTemplate = document.querySelector('#card').content;
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

const popupImg = document.querySelector('.popup-image')
const cardTitle = document.querySelector('.card__title')
const popupImgImg = popupImg.querySelector('.popup-image__img');
const popupImgTitle = popupImg.querySelector('.popup-image__title');
const popupImgButtonClose = popupImg.querySelector('.popup-image__close');

// Шесть карточек «из коробки»

function createCard(name, link, alt) {
  const cardsElement = cardsTemplate.querySelector('.card').cloneNode(true);
  cardsElement.querySelector('.card__title').textContent = name;
  cardsElement.querySelector('.card__photo').src = link;
  cardsElement.querySelector('.card__photo').alt = alt;
  cardsElement.querySelector('.card__like').addEventListener('click', likeOption);
  cardsElement.querySelector('.card__trash').addEventListener('click', removeOption);
  cardsElement.querySelector('.card__photo').addEventListener('click', function(evt) {
    openPopup(popupImg);
    popupImgImg.src = evt.target.src;
    popupImgImg.alt = alt;
    popupImgTitle.textContent = name;
  })
  return cardsElement;
}

function likeOption(evt) {
  evt.target.classList.toggle('card__like_active');
}

function removeOption(evt) {
  evt.target.parentElement.remove();
}

function addCardEnd(el) {
  cards.appendChild(el);
}

initialCards.forEach(el => {
  const card = createCard(el.name, el.link, el.alt);
  addCardEnd(card);
})

//add-close popup

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

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

cardAddButton.addEventListener('click', cardAddPopupOpen);

cardAddPopupCloseButton.addEventListener('click', cardAddPopupClose);

function addCardStart(el) {
  cards.prepend(el);
}

const submitAddCardForm = function(evt) {
  evt.preventDefault();
  const name = placeInput.value;
  const link = srcInput.value;
  const alt = placeInput.value;
  const card = createCard(name, link, alt);
  addCardStart(card);
  cardAddPopupClose();
  srcInput.value = "";
  placeInput.value = "";
}

cardAddForm.addEventListener('submit', submitAddCardForm);

// PopupImg

const popupImgClose = function() {
  closePopup(popupImg);
}

popupImgButtonClose.addEventListener('click', popupImgClose);