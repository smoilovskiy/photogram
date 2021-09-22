import { displayErrorMessage, displaySuccessMessage } from "./messages.js";
const dataForm = document.querySelector('.img-upload__form');

export async function getData() {

  let response = await fetch('https://23.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    })
  let serverAnswer = await response.json();

  return serverAnswer;
}


dataForm.addEventListener('submit', sendData);

export async function sendData(evt) {
  evt.preventDefault();

  const formData = new FormData(dataForm);

  let responce = await fetch('https://23.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body: formData
  });

  function action(response) {

    console.log(response.status);

    if (response.status === 200) {
      dataForm.reset();
      displaySuccessMessage();
    } else {
      displayErrorMessage('Ошибка отправки фотографии', 'Закрыть');
    }
  }
  action(responce);
}