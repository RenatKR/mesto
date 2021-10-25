//popup

let popupElement = document.querySelector('.popup');
let formElement = popupElement.querySelector('.popup__submit-form')
let nameInput = popupElement.querySelector('.popup__input_name');
let jobInput = popupElement.querySelector('.popup__input_job');
let popupCloseButtonElement = popupElement.querySelector('.popup__close')

//page

let profileElement = document.querySelector('.profile');
let profileTitle = profileElement.querySelector('.profile__title');
let profileSubtitle = profileElement.querySelector('.profile__subtitle');
let profileEditButton = profileElement.querySelector('.profile__edit-button');
let profileAddButton = profileElement.querySelector('.profile__add-button');

//передача данных в форму popup

const popupOpen = function() {
  popupElement.classList.add('popup_condition_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

const popupClose = function() {
  popupElement.classList.remove('popup_condition_opened');
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