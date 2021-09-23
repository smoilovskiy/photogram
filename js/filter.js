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
      filtered = response.slice(0, 2);
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





// function imgFilters(serverAnswer) {

//   let housingType = document.querySelector('#housing-type');
//   let housingPrice = document.querySelector('#housing-price');
//   let housingRooms = document.querySelector('#housing-rooms');
//   let housingGuests = document.querySelector('#housing-guests');

//   let tempArr = [];
//   let filterFeatures = document.querySelectorAll('.map__checkbox[type="checkbox"]:checked');

//   filterFeatures.forEach(function (currentValue) {

//     tempArr.push(currentValue.value);

//   })

//   console.log(filterFeatures);
//   console.log(tempArr);

//   function filterByHousingType(offer) {
//     if (housingType.value === "any") {
//       return true;
//     }
//     return offer.offer.type === housingType.value;
//   }

//   function filterByHousingPrice(offer) {
//     if (housingPrice.value === "low") {
//       return offer.offer.price < 10000;
//     }
//     if (housingPrice.value === "middle") {
//       return offer.offer.price >= 10000 && offer.offer.price <= 50000;
//     }
//     if (housingPrice.value === "high") {
//       return offer.offer.price > 50000;
//     }
//     if (housingPrice.value === "any") {
//       return true;
//     }
//   }

//   function filterByHousingRooms(offer) {
//     if (housingRooms.value === "any") {
//       return true;
//     }

//     return offer.offer.rooms === +housingRooms.value;

//   }

//   function filterByHousingGuests(offer) {
//     if (housingGuests.value === "any") {
//       return true;
//     }
//     return offer.offer.guests === +housingGuests.value;
//   }

//   function filterByFeature(offer) {
//     if (tempArr.length === 0) {
//       return true;
//     }

//     let filtered = false;

//     if (Boolean(offer.offer.features) && tempArr.length > 0) {

//       for (let i = 0; i < tempArr.length; i++) {
//         if (offer.offer.features.includes(tempArr[i])) {
//           filtered = true;
//         }
//       }
//     }

//     return filtered;
//   }


//   let commonFilter = function (elem) {

//     return filterByHousingType(elem) && filterByHousingPrice(elem) && filterByHousingRooms(elem) && filterByHousingGuests(elem) && filterByFeature(elem);
//   }

//   let filteredArr = serverAnswer.filter(commonFilter);
//   let commonMarkers = document.querySelectorAll('.leaflet-marker-icon[src="./img/pin.svg"]')
//   for (let i = 0; i < commonMarkers.length; i++) {
//     commonMarkers[i].remove();
//   }
//   createCommonMarkers(filteredArr);
// }