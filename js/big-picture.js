export function showBigImage(photos) {

let pictures = document.querySelector('.pictures'); // assuming pictures exists
let bigPicture = document.querySelector('.big-picture');
let body = document.querySelector('body');

pictures.addEventListener('click', function(evt) {

if (evt.target.className === 'picture__img') {
  let id = evt.target.getAttribute('data-id') - 1;

  //from task
  let socialCommentCount = document.querySelector('.social__comment-count');
  let commentsLoader = document.querySelector('.comments-loader');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  body.classList.add('modal-open');

  let bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
  let bigPictureSocial = bigPicture.querySelector('.big-picture__social');
  let socialLikes = bigPictureSocial.querySelector('.social__likes');
  let likes = socialLikes.querySelector('.likes-count');
  let commentsCount = bigPictureSocial.querySelector('.comments-count');
  let socialCommentImg = bigPictureSocial.querySelector('.social__comment').querySelector('img');
  let socialCommentText = bigPictureSocial.querySelector('.social__text');

  bigPicture.classList.remove('hidden');

  bigPictureImg.src = photos[id].url;
  bigPictureImg.alt = photos[id].description;
  likes.innerHTML = photos[id].likes;
  commentsCount.innerHTML = photos[id].comments.length;


  socialCommentImg.src = photos[id].comments[0].avatar;
  socialCommentImg.alt = photos[id].comments[0].name;
  socialCommentText.innerHTML = photos[id].comments[0].message;

}

});



window.addEventListener('click', function(evt) {
  if (evt.target.id === 'picture-cancel') {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

}