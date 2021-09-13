export function showBigImage(photos) {

  let pictures = document.querySelector('.pictures');
  let bigPicture = document.querySelector('.big-picture');
  let body = document.querySelector('body');
  let hashtagsInput = document.querySelector('.text__hashtags');
  let textCommentInput = document.querySelector('.text__description');


  textCommentInput.addEventListener('focus', function() {
    window.removeEventListener('keydown', escapeHandler )
  })

  hashtagsInput.addEventListener('focus', function() {
    window.removeEventListener('keydown', escapeHandler )
  })

  hashtagsInput.addEventListener('blur', function() {
    window.addEventListener('keydown', escapeHandler )
  })  

  pictures.addEventListener('click', function (evt) {

    if (evt.target.className === 'picture__img') {


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

      bigPicture.classList.remove('hidden');

      let id = evt.target.getAttribute('data-id') - 1;
      bigPictureImg.src = photos[id].url;
      bigPictureImg.alt = photos[id].description;
      likes.innerHTML = photos[id].likes;
      commentsCount.innerHTML = photos[id].comments.length;

      let socialCaption = document.querySelector('.social__caption');

      socialCaption.innerHTML = photos[id].description;


      let comments = document.querySelector('.social__comments');
      let newComments = photos[id].comments.map(comment => {
        return `<li class="social__comment">
    <img class="social__picture" src='${comment.avatar}' alt="Аватар комментатора фотографии" width="35" height="35">
    <p class="social__text">${comment.message}</p>
  </li>`
      }).join('');
      comments.innerHTML = newComments;
    }

  });

  window.addEventListener('click', function (evt) {
    if (evt.target.id === 'picture-cancel') {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

  function escapeHandler(evt) {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');

    }
  }

  window.addEventListener('keydown', escapeHandler );

}