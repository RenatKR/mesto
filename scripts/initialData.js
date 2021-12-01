export const initialCards = [{
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

export const config = {
  formSelector: '.popup__form', //формы
  inputSelector: '.popup__input', //инпуты
  submitButtonSelector: '.popup__button', //кнопки
  inactiveButtonClass: 'popup__button_disabled', //стиль неактивной кнопки
  inputErrorClass: 'popup__input_type_error', //стиль невалидного инпута
  errorClass: 'popup__error_visible' //класс текстовой ошибки
};