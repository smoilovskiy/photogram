import { photos } from './main.js';

// const firstPhoto = photos[0];
// console.log(firstPhoto);

export function createPreview(firstPhoto) {

let main = document.querySelector('.main');
let fragment = document.createDocumentFragment();
let preview = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
let previewImg = preview.querySelector('.picture__img');
let pictureInfo = preview.querySelector('.picture__info');
let pictureLikes = pictureInfo.querySelector('.picture__likes');
let pictureComments = pictureInfo.querySelector('.picture__comments');


pictureComments.innerText = firstPhoto.comments.length;
pictureLikes.innerText = firstPhoto.likes;
previewImg.src = firstPhoto.url;
previewImg.style.width = '182px';
previewImg.style.height = '182px';

fragment.appendChild(preview);
main.appendChild(fragment);
console.log(preview);
}