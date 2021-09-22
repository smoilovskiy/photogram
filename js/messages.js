const main = document.querySelector('main');
let imgUploadOverlay = document.querySelector('.img-upload__overlay');

export function displayErrorMessage(errorMessage, quitButtonText) {

  let elem = document.createElement('div');
  let clone = error.content.cloneNode(true);

  let newErrorMessage = clone.querySelector('.error__title');
  let newQuitErrorButtonText = clone.querySelector('.error__button');
  newErrorMessage.innerText = errorMessage;
  newQuitErrorButtonText.innerText = quitButtonText;
  imgUploadOverlay.classList.add('hidden');

  elem.append(clone);
  main.append(elem);

  window.addEventListener('keydown', templateKey);
  window.addEventListener('click', templateClick);

  function templateKey(evt) {
    if (evt.keyCode == 27) {
      elem.style.display = 'none';

    }
  }

  function templateClick(evt) {
    if (evt.target.className === 'error__button') {
      elem.style.display = 'none';

    }
  }
console.log(errorMessage);
}

export function displaySuccessMessage() {
  let elem = document.createElement('div');
  let clone = success.content.cloneNode(true);
  elem.append(clone);
  main.append(elem);
  imgUploadOverlay.classList.add('hidden');


  window.addEventListener('click', templateClick);
  window.addEventListener('keydown', templateKey);

  function templateClick(evt) {

    if (evt.target.className === 'success__button') {
      elem.style.display = 'none';
    }
  }

  function templateKey(evt) {
    if (evt.keyCode == 27) {
      elem.style.display = 'none';
    }
  }
}