export function showBigImage() {

let picture  = document.querySelector('.pictures'); // assuming pictures exists
picture.addEventListener('click', function(evt) {

if (evt.target.className === 'picture__img') {

  let id = picture.querySelector('.picture__img').getAttribute('id');
  console.log(id)
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