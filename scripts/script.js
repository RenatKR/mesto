let popupElement = document.querySelector('.popup');
let formElement = popupElement.querySelector('.popup__submit-form')
let nameInput = popupElement.querySelector('.popup__input_type_name');
let jobInput = popupElement.querySelector('.popup__input_type_job');
let popupCloseButtonElement = popupElement.querySelector('.popup__close')

let profileElement = document.querySelector('.profile');
let profileTitle = profileElement.querySelector('.profile__title');
let profileSubtitle = profileElement.querySelector('.profile__subtitle');
let profileEditButton = profileElement.querySelector('.profile__edit-button');


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

const initialCards = [{
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
  cardsElement.querySelector('.card__like').addEventListener('click', function(evt) { evt.target.classList.toggle('card__like_active') });
  cardsElement.querySelector('.card__trash').addEventListener('click', function(evt) { evt.target.parentElement.remove(); })
  cardsElement.querySelector('.card__photo').addEventListener('click', function() {
    popupImg.classList.add('popup_is-opened');
    popupImgImg.src = el.link;
    popupImgTitle.textContent = el.name;
  })
  cards.appendChild(cardsElement);
})

//добавление и удаление popupAdd

let profileAddButton = profileElement.querySelector('.profile__add-button');
let popupAddElement = document.querySelector('.popup-add');
let formAddElement = popupAddElement.querySelector('.popup__submit-form')
let placeInput = popupAddElement.querySelector('.popup__input_type_place');
let srcInput = popupAddElement.querySelector('.popup__input_type_src');
let profileCloseAddButton = popupAddElement.querySelector('.popup__close');


profileAddButton.addEventListener('click', function() {
  popupAddElement.classList.add('popup_is-opened');
});

const popupAddClose = function() {
  popupAddElement.classList.remove('popup_is-opened');
}

profileCloseAddButton.addEventListener('click', popupAddClose);

//добавление карточек

let formAddSubmitHandler = function(evt) {
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
  })
  cards.prepend(cardAddElement);
  popupAddClose();
}

formAddElement.addEventListener('submit', formAddSubmitHandler);

// открытие popup-image с картинкой

let popupImg = document.querySelector('.popup-image')
let cardTitle = document.querySelector('.card__title')
let popupImgImg = popupImg.querySelector('.popup-image__img');
let popupImgTitle = popupImg.querySelector('.popup-image__title');
let popupImgButtonClose = popupImg.querySelector('.popup-image__close');
popupImgButtonClose.addEventListener('click', function() {
  popupImg.classList.remove('popup_is-opened');
});