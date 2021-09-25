const COMMENTS_COUNT = 5;
let commentsCount = document.querySelector('.comments-count');
let commentsCounter = COMMENTS_COUNT;
let socialCommentCount = document.querySelector('.social__comment-count');
let bigPicture = document.querySelector('.big-picture');
let body = document.querySelector('body');
let hashtagsInput = document.querySelector('.text__hashtags');
let textCommentInput = document.querySelector('.text__description');
let bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
let bigPictureSocial = bigPicture.querySelector('.big-picture__social');
let socialLikes = bigPictureSocial.querySelector('.social__likes');
let likes = socialLikes.querySelector('.likes-count');
let pictures = document.querySelector('.pictures');
let commentsLoader = document.querySelector('.comments-loader');
let socialCaption = document.querySelector('.social__caption');
let loadMoreComments = document.querySelector('.social__comments-loader');
let comments = document.querySelector('.social__comments');




export function showBigImage(photos) {

  textCommentInput.addEventListener('focus', function () {
    window.removeEventListener('keydown', escapeHandler)
  })

  hashtagsInput.addEventListener('focus', function () {
    window.removeEventListener('keydown', escapeHandler)
  })

  hashtagsInput.addEventListener('blur', function () {
    window.addEventListener('keydown', escapeHandler)
  })




  pictures.addEventListener('click', function (evt) {

    comments.innerHTML = '';
    commentsCounter = COMMENTS_COUNT;

    let id = evt.target.getAttribute('data-id');

    let photo = photos.find(img => img.id == id);

    bigPictureImg.src = photo.url;
    bigPictureImg.alt = photo.description;
    likes.innerHTML = photo.likes;
    commentsCount.innerHTML = photo.comments.length;


    socialCommentCount.innerHTML = '5 из ' + photo.comments.length + ' комментариев';
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');


    socialCaption.innerHTML = photo.description;


    let newComments = photo.comments.map(comment => {
      return `<li class="social__comment">
        <img class="social__picture" src='${comment.avatar}' alt="Аватар комментатора фотографии" width="35" height="35">
        <p class="social__text">${comment.message}</p>
        </li>`
    })

    if (newComments.length <= COMMENTS_COUNT) {
      comments.innerHTML = newComments.join('');
      socialCommentCount.classList.remove('hidden');
      socialCommentCount.innerHTML = newComments.length + ' из ' + newComments.length + ' комментариев';

    } else {

      commentsCounter = COMMENTS_COUNT;
      comments.innerHTML = newComments.slice(0, commentsCounter).join('');
      socialCommentCount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');

      loadMoreComments.addEventListener('click', loadMoreCommentsHandler);


      function loadMoreCommentsHandler() {
        commentsCounter += 5;

        //debugger
        console.log(commentsCounter);

        comments.innerHTML = newComments.slice(0, commentsCounter).join('');

        if (newComments.length <= commentsCounter) {
          commentsCounter = newComments.length;
          commentsLoader.classList.add('hidden');
        }
        socialCommentCount.innerHTML = commentsCounter + ' из ' + newComments.length + ' комментариев';
      }

      window.addEventListener('click', function (evt) {

        if (evt.target.id === 'picture-cancel') {
          loadMoreComments.removeEventListener('click', loadMoreCommentsHandler);
        }
      });

      window.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape') {
          loadMoreComments.removeEventListener('click', loadMoreCommentsHandler);
        }
      });

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

  window.addEventListener('keydown', escapeHandler);

}