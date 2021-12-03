export const popupImg = document.querySelector('.popup-image');
export const popupImgImg = popupImg.querySelector('.popup-image__img');
export const popupImgTitle = popupImg.querySelector('.popup-image__title');

//add-close popup

export function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupbyEsc);
  }

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupbyEsc);
  }

// закрытие попапа по escape

export function closePopupbyEsc(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
}