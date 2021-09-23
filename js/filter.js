import { createPreview } from './preview.js';
import { showBigImage } from './big-picture.js';

let imgFilter = document.querySelector('.img-filters__form');
let imgFilterContainer = document.querySelector('.img-filters');
let filterDefault = document.querySelector('#filter-default');
let filterRandom = document.querySelector('#filter-random');
let filterDiscussed = document.querySelector('#filter-discussed');

let filtered = [];

export function imgFilters(response) {

  imgFilterContainer.classList.remove('img-filters--inactive');

  showThumbnails(response);

  imgFilter.addEventListener('click', function (evt) {

    if (evt.target.id === 'filter-default') {
      filterDefault.classList.add('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
      clearThumbnails();
      showThumbnails(response);
      console.log(response);
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

      console.log(filtered);
      clearThumbnails();
      showThumbnails(filtered);
    }
  });

}

function showThumbnails(filtered) {
  for (let i = 0; i < filtered.length; i++) {
    createPreview(filtered[i]);
  }
  showBigImage(filtered);
}

function clearThumbnails() {
  let photoContainerElement = document.querySelector('.pictures');
  let picturesToRemove = document.querySelectorAll('.picture');
  picturesToRemove.forEach(function (photo) {
    photoContainerElement.removeChild(photo);
  });
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}