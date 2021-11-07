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

function createCard(el) {

  const cardsElement = cardsTemplate.querySelector('.card').cloneNode(true);

  cardsElement.querySelector('.card__photo').src = el.link;
  cardsElement.querySelector('.card__photo').alt = el.alt;
  cardsElement.querySelector('.card__title').textContent = el.name;

  cardsElement.querySelector('.card__like').addEventListener('click', function(evt) { evt.target.classList.toggle('card__like_active') });
  cardsElement.querySelector('.card__trash').addEventListener('click', function(evt) { evt.target.parentElement.remove(); })
  cardsElement.querySelector('.card__photo').addEventListener('click', function() {
    popupImg.classList.add('popup_is-opened');
    popupImgImg.src = el.link;
    popupImgImg.alt = el.alt;
    popupImgTitle.textContent = el.name;
  })

  return cardsElement;
}

function addCard(el) {
  cards.appendChild(createCard(el));
}

initialCards.forEach(el => {
  addCard(el);
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

const formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}

profilePopupForm.addEventListener('submit', formSubmitHandler);

// popupAddCard

const cardAddPopupOpen = function() {
  openPopup(cardAddPopup);
}

const cardAddPopupClose = function() {
  closePopup(cardAddPopup);
}

cardAddButton.addEventListener('click', cardAddPopupOpen);

cardAddPopupCloseButton.addEventListener('click', cardAddPopupClose);

const formAddSubmitHandler = function(evt) {
  evt.preventDefault();
  const cardAddElement = cardsTemplate.querySelector('.card').cloneNode(true);
  cardAddElement.querySelector('.card__photo').src = srcInput.value;
  cardAddElement.querySelector('.card__title').textContent = placeInput.value;
  cardAddElement.querySelector('.card__like').addEventListener('click', function(evt) { evt.target.classList.toggle('card__like_active') });
  cardAddElement.querySelector('.card__trash').addEventListener('click', function(evt) { evt.target.parentElement.remove(); })
  cardAddElement.querySelector('.card__photo').addEventListener('click', function() {
    popupImg.classList.add('popup_is-opened');
    popupImgImg.src = srcInput.value;
    popupImgTitle.textContent = placeInput.value;
  });
  cards.prepend(cardAddElement);
  cardAddPopupClose();
  srcInput.value = "";
  placeInput.value = "";
}

cardAddForm.addEventListener('submit', formAddSubmitHandler);

// PopupImg

const PopupImgClose = function() {
  closePopup(popupImg);
}

popupImgButtonClose.addEventListener('click', PopupImgClose);