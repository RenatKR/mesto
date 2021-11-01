let popupElement = document.querySelector('.popup');
let formElement = popupElement.querySelector('.popup__submit-form')
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let popupCloseButtonElement = popupElement.querySelector('.popup__close')

let profileElement = document.querySelector('.profile');
let profileTitle = profileElement.querySelector('.profile__title');
let profileSubtitle = profileElement.querySelector('.profile__subtitle');
let profileEditButton = profileElement.querySelector('.profile__edit-button');
let profileAddButton = profileElement.querySelector('.profile__add-button');

const popupOpen = function() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const popupClose = function() {
  popupElement.classList.remove('popup_is-opened');
}

profileEditButton.addEventListener('click', popupOpen);

popupCloseButtonElement.addEventListener('click', popupClose);

let formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);

//sprint 5

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsTemplate = document.querySelector('#card').content;

const cards = document.querySelector('.cards');

//добавление карточек при загрузке

initialCards.forEach(el => {

const cardsElement = cardsTemplate.querySelector('.card').cloneNode(true);

cardsElement.querySelector('.card__photo').src = el.link;

cardsElement.querySelector('.card__title').textContent = el.name;

cards.appendChild(cardsElement);
})












