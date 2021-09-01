export function showBigImage(photos) {

let pictures = document.querySelector('.pictures'); // assuming pictures exists
pictures.addEventListener('click', function(evt) {

if (evt.target.className === 'picture__img') {
  let id = evt.target.getAttribute('data-id') - 1;
  console.log('id', id);

  let bigPicture = document.querySelector('.big-picture');
  let bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
  let bigPictureSocial = bigPicture.querySelector('.big-picture__social');
  let socialLikes = bigPictureSocial.querySelector('.social__likes');
  let likes = socialLikes.querySelector('.likes-count');


  bigPicture.classList.remove('hidden');
  bigPictureImg.src = photos[id].url;
  bigPictureImg.alt = photos[id].description;
  likes.innerHTML = photos[id].likes;


}

});



// window.addEventListener('click', templateClick);
// window.addEventListener('keydown', templateKey);

// function templateClick(evt) {

//   if (evt.target.className === 'success') {

//     elem.style.display = 'none';
//     document.location.reload();
//   }
// }

// function templateKey(ev) {
//   if (ev.keyCode == 27) {
//     elem.style.display = 'none';
//     document.location.reload();
//   }
// }

}