export function showBigImage(photos) {

let pictures = document.querySelector('.pictures'); // assuming pictures exists
pictures.addEventListener('click', function(evt) {

if (evt.target.className === 'picture__img') {
  let id = evt.target.getAttribute('data-id') - 1;
  console.log('id', id);

  let bigImage = document.querySelector('.big-picture');
  let bigPictureImg = bigImage.querySelector('.big-picture__img').querySelector('img');
  bigImage.classList.remove('hidden');
  bigPictureImg.src = photos[id].url;

  console.log(bigImage.src);
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