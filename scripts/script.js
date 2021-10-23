//popup

let popupElement = document.querySelector('.popup');
let formElement = popupElement.querySelector('.popup__container')
console.log(formElement);
let nameInput = popupElement.querySelector('.popup__input-name');
let jobInput = popupElement.querySelector('.popup__input-description');
let popupSaveButtonElement = popupElement.querySelector('.popup__save');
let popupCloseButtonElement = popupElement.querySelector('.popup__close')

//page

let profileElement = document.querySelector('.profile');
let profileTitle = profileElement.querySelector('.profile__title');
let profileSubtitle = profileElement.querySelector('.profile__subtitle');
let profileEditButton = profileElement.querySelector('.profile__edit-button');
let profileAddButton = profileElement.querySelector('.profile__add-button');

//передача данных в форму popup

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

//open-close popup

const togglePopupVisibility = function(addEventListener) {
  popupElement.classList.toggle('popup__is-opened');
};

profileEditButton.addEventListener('click', togglePopupVisibility);

popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

popupSaveButtonElement.addEventListener('click', togglePopupVisibility);


//редактирование и сохранение данных popup-profile

let formSubmitHandler = function(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

popupSaveButtonElement.addEventListener('click', formSubmitHandler);

formElement.addEventListener('submit', formSubmitHandler);