import { profilePopupForm, profileEditButton, cardAddButton, cardAddForm, placeInput, srcInput } from '../utils/utils.js'
import { initialCards, config } from '../utils/initialData.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

// рендер карточек "из коробки"

function createCard(item) {
  const card = new Card({
    item,
    handleCardClick: () => {
      popupWithImage.open(item);
    }
  }, '.template');
  const cardElement = card.renderCard();
  return cardElement;
}

const popupWithImage = new PopupWithImage('.popup-image');

const sectionCard = new Section({
    renderer: (item) => {
      sectionCard.addItem(createCard(item));
    }
  },
  '.cards');

sectionCard.renderItems(initialCards);

// popupAddCard

cardAddButton.addEventListener('click', addNewCardPopupOpen);

const popupAddNewCard = new PopupWithForm('.popup-add', {
  handleSubmitForm: (data) => {
    const item = {
      name: data.place,
      link: data.src,
      alt: data.place,
    }
    sectionCard.addItemPrepend(createCard(item));
    popupAddNewCard.close();
  }
})

popupAddNewCard.setEventListeners();

function addNewCardPopupOpen() {
  popupAddNewCard.open();
  cardAddFormValidator.toggleButton();
}

//profilePopup

const userInfoForm = new UserInfo('.profile__title', '.profile__subtitle');

const popupEditUserInfo = new PopupWithForm('.popup_profile', {
  handleSubmitForm: (result) => {
    userInfoForm.setUserInfo(result);
    popupEditUserInfo.close();
  }
})

popupEditUserInfo.setEventListeners();

profileEditButton.addEventListener('click', profilePopupOpen);

function profilePopupOpen() {
  popupEditUserInfo.setInputValues(userInfoForm.getUserInfo());
  popupEditUserInfo.open();
  profilePopupFormValidator.toggleButton();
}

//валидация инициация

const profilePopupFormValidator = new FormValidator(profilePopupForm, config);

profilePopupFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(cardAddForm, config);

cardAddFormValidator.enableValidation();