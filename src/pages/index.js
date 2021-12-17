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

const sectionCard = new Section({
    data: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, item.alt, '.template', {
        handleCardClick: () => {
          const PopupWithImageforThisCard = new PopupWithImage(item.name, item.link, item.alt, '.popup-image');
          PopupWithImageforThisCard.open();
        }
      })
      const cardElement = card.renderCard();
      sectionCard.addItem(cardElement);
    }
  },
  '.cards');

sectionCard.renderItems();

//profilePopup

const UserInfoCurrent = new UserInfo('.profile__title', '.profile__subtitle');
UserInfoCurrent.getUserInfo();

profileEditButton.addEventListener('click', profilePopupOpen);

function profilePopupOpen() {

  const popupEditUserInfo = new PopupWithForm('.popup_profile', {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
      const userInfoForSet = new UserInfo('.profile__title', '.profile__subtitle');
      userInfoForSet.setUserInfo(popupEditUserInfo._getInputValues());
      popupEditUserInfo.close();
    }
  })
  popupEditUserInfo.setValues(UserInfoCurrent.getUserInfo());
  popupEditUserInfo.open();
  popupEditUserInfo.setEventListeners();
}

// popupAddCard

cardAddButton.addEventListener('click', addNewCardPopupOpen);

function addNewCardPopupOpen() {

  const popupAddNewCard = new PopupWithForm('.popup-add', {
    handleSubmitForm: (evt) => {
      evt.preventDefault();
      const item = [{
        name: placeInput.value,
        link: srcInput.value,
        alt: placeInput.value,
      }]
      const sectionCard = new Section({
          data: item,
          renderer: (item) => {
            const card = new Card(item.name, item.link, item.alt, '.template', {
              handleCardClick: () => {
                const PopupWithImageforThisCard = new PopupWithImage(item.name, item.link, item.alt, '.popup-image');
                PopupWithImageforThisCard.open();
              }
            });
            const cardElement = card.renderCard();
            sectionCard.addItemPrepend(cardElement);
          }
        },
        '.cards');
      sectionCard.renderItems();
      popupAddNewCard.close();
    }
  });

  popupAddNewCard.open();
  popupAddNewCard.setEventListeners();
}

//валидация инициация

const profilePopupFormValidator = new FormValidator(profilePopupForm, config);

profilePopupFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(cardAddForm, config);

cardAddFormValidator.enableValidation();