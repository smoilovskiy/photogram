import { getData } from "./server.js";
import { showBigImage } from "./big-picture.js";

getData()
  .then(function (serverAnswer) {
    for (let i = 0; i < serverAnswer.length; i++) {
      createPreview(serverAnswer[i]);
    }
    showBigImage(serverAnswer);
    // createPreview(serverAnswer);//serverAnswer[0]
  })
  .catch(function (error) {

    // displayErrorMessage(error);
    // let quitButton = document.querySelector('.error__button');
    // quitButton.addEventListener('click', getData)
  })


export function createPreview(photo) {
  console.log(photo);

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

  console.log(preview);
}