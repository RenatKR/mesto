import { profilePopupForm, profileEditButton, cardAddButton, cardAddForm, avaEditPopup, avaEditButton, avaImg } from '../utils/utils.js'
import { config } from '../utils/initialData.js'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupConfirmDel from '../components/PopupConfirmDel.js';
import './index.css';

// рендер карточек

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '5fdc434d-6d5b-4e32-8137-00f87a447f90',
    'Content-Type': 'application/json'
  }
})

function createCard(item) {
  const card = new Card({
    item,
    handleCardClick: () => {
      popupWithImage.open(item);
    },
    handleTrashClick: () => {
      confirmDelPopup.open(card);
    },
    handleLikeClickAdd: () => {
      api.setLikeCard(card._cardId)
        .then((data) => {
          card.setNumLiketoCard(data.likes.length);
        });
    },
    handleLikeClickRemove: () => {
      api.deleteLikeCard(card._cardId)
        .then((data) => {
          card.setNumLiketoCard(data.likes.length);
        });
    }
  }, '.template');
  const cardElement = card.renderCard();
  card.handleLikeToggle();
  return cardElement;
}

const popupWithImage = new PopupWithImage('.popup-image');

const sectionCard = new Section({
    renderer: (item) => {
      sectionCard.addItem(createCard(item));
    }
  },
  '.cards');

//ConfirmPopup

const confirmDelPopup = new PopupConfirmDel('.popup-del-confirm', {
  handleSubmit: (card) => {
    api.deleteCard(card._cardId)
      .then(() => {
        card.removeOption();
      })
      .catch((err) => {
        console.log(err);
      })
  }
});

// popupAddCard

cardAddButton.addEventListener('click', addNewCardPopupOpen);

const popupAddNewCard = new PopupWithForm('.popup-add', {
  handleSubmitForm: (data) => {
    const item = {
      name: data.place,
      link: data.src,
      alt: data.place,
    }
    api.addNewCard(item)
      .then((data) => {
        sectionCard.addItemPrepend(createCard(data))
      })
      .then(() => {
        popupAddNewCard.close();
      })
      .finally(() => {
        popupAddNewCard.loading(true);
      });

  }
})

popupAddNewCard.setEventListeners();

function addNewCardPopupOpen() {
  popupAddNewCard.loading(false);
  popupAddNewCard.open();
  cardAddFormValidator.toggleButton();
}

//profilePopup

const userInfoForm = new UserInfo('.profile__title', '.profile__subtitle');

const popupEditUserInfo = new PopupWithForm('.popup_profile', {
  handleSubmitForm: (result) => {
    const refRes = {
      name: result.name,
      about: result.job
    }
    userInfoForm.setUserInfo(refRes);
    api.editUserInfo(refRes)
      .then(() => {
        popupEditUserInfo.close();
      })
      .finally(() => {
        popupEditUserInfo.loading(true);
      })

  }
})

popupEditUserInfo.setEventListeners();

profileEditButton.addEventListener('click', profilePopupOpen);

function profilePopupOpen() {
  popupEditUserInfo.loading(false);
  popupEditUserInfo.setInputValues(userInfoForm.getUserInfo());
  popupEditUserInfo.open();
  profilePopupFormValidator.toggleButton();
}

//AvaEditPopup

avaEditButton.addEventListener('click', editAva)

const popupEditAva = new PopupWithForm('.popup-ava-edit', {
  handleSubmitForm: (data) => {
    const src = {
      avatar: data.ava
    }
    console.log(src);
    api.editUserAva(src)
      .then(() => {
        avaImg.src = data.ava;
        popupEditAva.close();
      })
      .finally(() => {
        popupEditAva.loading(true);
      })
  }
})

function editAva() {
  popupEditAva.loading(false);
  popupEditAva.open();
  avaEditFormValidator.toggleButton();
}

popupEditAva.setEventListeners();


//валидация инициация

const profilePopupFormValidator = new FormValidator(profilePopupForm, config);

profilePopupFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(cardAddForm, config);

cardAddFormValidator.enableValidation();

const avaEditFormValidator = new FormValidator(avaEditPopup, config)

avaEditFormValidator.enableValidation();

//Api

const initialCardsApi = api.getInitialCards();
initialCardsApi.then((data) => {
  data.map((item) => {
    sectionCard.addItem(createCard(item));
  })
}).catch((err) => {
  console.log(err);
})

const userInfoApi = api.getUserInfo();
userInfoApi.then((data) => {
  userInfoForm.setUserInfo(data);
  avaImg.src = data.avatar;
}).catch((err) => {
  console.log(err);
}).finally(() => {
  popupEditUserInfo.loading(true);
})