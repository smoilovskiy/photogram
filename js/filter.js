import { createPreview } from './preview.js';
import { showBigImage } from './big-picture.js';

let imgFilter = document.querySelector('.img-filters__form');
let imgFilterContainer = document.querySelector('.img-filters');
let filterDefault = document.querySelector('#filter-default');
let filterRandom = document.querySelector('#filter-random');
let filterDiscussed = document.querySelector('#filter-discussed');


export function imgFilters(response) {
  let filtered = response;
  imgFilterContainer.classList.remove('img-filters--inactive');
  showThumbnails(response);

  let listener = document.addEventListener('click', function (evt) {
    showBigImage(evt, response);
  })


  imgFilter.addEventListener('click', function (evt) {

    if (evt.target.id === 'filter-default') {
      filterDefault.classList.add('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      clearThumbnails();
      filtered = response.slice();
      showThumbnails(filtered);
    }

    if (evt.target.id === 'filter-random') {
      filterRandom.classList.add('img-filters__button--active');
      filterDefault.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      clearThumbnails();
      filtered = response.slice();
      filtered = shuffle(filtered).slice(0, 10);
      showThumbnails(filtered);
    }

    if (evt.target.id === 'filter-discussed') {
      filterDiscussed.classList.add('img-filters__button--active');
      filterDefault.classList.remove('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      filtered = response.slice();
      filtered.sort(function (a, b) {
        return parseInt(b.comments.length) - parseInt(a.comments.length);
      });
      clearThumbnails();
      showThumbnails(filtered);
    }
  });
}

function showThumbnails(filtered) {
  for (let photo of filtered) {
    createPreview(photo);
  }
}

function clearThumbnails() {
  let photoContainerElement = document.querySelector('.pictures');
  let picturesToRemove = document.querySelectorAll('.picture');
  picturesToRemove.forEach(function (photo) {
    photoContainerElement.removeChild(photo);
  });
  document.removeEventListener('click', clickListener)
}

function clickListener(filtered) {
  document.addEventListener('click', function (evt) {
    showBigImage(evt, filtered);
  })
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}