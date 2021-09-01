
import { getRandomInt } from './randomGen.js';
import { createPreview } from './preview.js';
import { showBigImage } from './big-picture.js';




const OBJECTS_COUNT = 25;
const COMMENTS_COUNT = 100;
const DESCRIPTIONS = ['description1', 'description2', 'description3', 'description4',
  'description5', 'description6', 'description7', 'description8', 'description9',
  'description10', 'description11', 'description12', 'description13', 'description14',
  'description15', 'description16', 'description17', 'description18', 'description19',
  'description20', 'description21', 'description22', 'description23', 'description24',
  'description25'];
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MESSAGES = [
  `Всё отлично! `,
  `В целом всё неплохо. Но не всё. `,
  `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. `,
  `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. `,
  `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. `,
  `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! `
];
const MESSAGES_MIN = 0;
const MESSAGES_MAX = 5;
const NAMES = ['Артем', 'Степан', 'Василий', 'Валя', 'Маша'];
const NAMES_MIN = 0;
const NAMES_MAX = 4;
let counter = 1;
let cCounter = 0;

let comments = new Array(COMMENTS_COUNT).fill().map(function () {

  const commentObj = {
    id: cCounter,
    avatar: `img/avatar-${getRandomInt(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: MESSAGES[getRandomInt(MESSAGES_MIN, MESSAGES_MAX)] + MESSAGES[getRandomInt(MESSAGES_MIN, MESSAGES_MAX)],
    name: NAMES[getRandomInt(NAMES_MIN, NAMES_MAX)],
  }
  cCounter++;
  return commentObj;
});


export let photos = new Array(OBJECTS_COUNT).fill().map(function () {

  let photoObj = {
    id: counter,
    url: `photos/${counter}.jpg`,
    description: DESCRIPTIONS[counter],
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),
    comments,
  }
  counter++;
  return photoObj;
});

console.log(photos[0]);
for (let i = 0; i < photos.length; i++) {
  createPreview(photos[i]);
}

showBigImage();
// console.log(picture);
