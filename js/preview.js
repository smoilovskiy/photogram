export function createPreview(firstPhoto) {


let pictures = document.querySelector('.pictures');
let fragment = document.createDocumentFragment();

let preview = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);
let previewImg = preview.querySelector('.picture__img');
let pictureInfo = preview.querySelector('.picture__info');
let pictureLikes = pictureInfo.querySelector('.picture__likes');
let pictureComments = pictureInfo.querySelector('.picture__comments');


pictureComments.innerText = firstPhoto.comments.length;
pictureLikes.innerText = firstPhoto.likes;
previewImg.src = firstPhoto.url;
previewImg.dataset.id = firstPhoto.id;

fragment.appendChild(preview);
pictures.appendChild(fragment);

console.log(preview);
}