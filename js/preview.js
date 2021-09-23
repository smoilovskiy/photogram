import { getData } from './server.js';
import { imgFilters } from './filter.js';
import { displayErrorMessage } from './messages.js'

let quitButton = document.querySelector('.error__button');

getData()
  .then(function (serverAnswer) {
    imgFilters(serverAnswer);
  })
  .catch(function (error) {
    displayErrorMessage(error, 'Try again');    
    quitButton.addEventListener('click', getData)
  })

export function createPreview(photo) {

  let pictures = document.querySelector('.pictures');
  let fragment = document.createDocumentFragment();

  let preview = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
  let previewImg = preview.querySelector('.picture__img');
  let pictureInfo = preview.querySelector('.picture__info');
  let pictureLikes = pictureInfo.querySelector('.picture__likes');
  let pictureComments = pictureInfo.querySelector('.picture__comments');


  pictureComments.innerText = photo.comments.length;
  pictureLikes.innerText = photo.likes;
  previewImg.src = photo.url;
  previewImg.dataset.id = photo.id;

  fragment.appendChild(preview);
  pictures.appendChild(fragment);
}