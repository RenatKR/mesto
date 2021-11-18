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
const cardAddFormButton = cardAddPopup.querySelector('.popup__save')

const popupImg = document.querySelector('.popup-image')
const cardTitle = document.querySelector('.card__title')
const popupImgImg = popupImg.querySelector('.popup-image__img');
const popupImgTitle = popupImg.querySelector('.popup-image__title');
const popupImgButtonClose = popupImg.querySelector('.popup__close');

// Шесть карточек «из коробки»

function createCard(name, link, alt) {
  const cardsElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardPhoto = cardsElement.querySelector('.card__photo');
  cardsElement.querySelector('.card__title').textContent = name;
  cardPhoto.src = link;
  cardPhoto.alt = alt;
  cardsElement.querySelector('.card__like').addEventListener('click', likeOption);
  cardsElement.querySelector('.card__trash').addEventListener('click', removeOption);
  cardPhoto.addEventListener('click', function(evt) {
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
  evt.target.closest('.card').remove();
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
  document.addEventListener('keydown', closePopupbyEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupbyEsc);
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

cardAddButton.addEventListener('click', function(evt) {
  cardAddPopupOpen(evt);
});

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
  cardAddFormButton.disabled = true;
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
  
popups.forEach(function (popup) {
  popup.addEventListener('mousedown', closePopupOnOverlay); 
})
  
function closePopupOnOverlay(evt) {
  if (evt.target !== evt.currentTarget) {}
  closePopup(evt.target);
}
  
// закрытие попапа по esc

function closePopupbyEsc(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
  closePopup(openedPopup);
  }
}