export function upload() {

  let body = document.querySelector('body');
  let uploadImg = document.querySelector('#upload-file');
  let uploadImgPopup = document.querySelector('.img-upload__overlay');
  // for user photo upload
  let uploadImgPreview = document.querySelector('.img-upload__preview').querySelector('img');

  uploadImg.addEventListener('change', function () {
    let file = uploadImg.files[0];

    let reader = new FileReader();

    reader.addEventListener('load', function () {
      uploadImgPopup.classList.remove('hidden');
      body.classList.add('modal-open');
      // for user photo upload
      uploadImgPreview.src = reader.result;
    });

    reader.readAsDataURL(file);

  });

  window.addEventListener('click', function (evt) {
    if (evt.target.id === 'upload-cancel') {
      uploadImgPopup.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && evt.target.className !== 'text__hashtags' && evt.target.className !== 'text__description') {
      uploadImgPopup.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });


}