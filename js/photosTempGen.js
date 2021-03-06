import { getRandomInt } from './randomGen.js';

const OBJECTS_COUNT = 25;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 100;
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


export let photos = new Array(OBJECTS_COUNT).fill().map(function () {

  let photoObj = {
    id: counter,
    url: `photos/${counter}.jpg`,
    description: DESCRIPTIONS[counter],
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),

    comments: new Array(getRandomInt(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)).fill().map(function () {
      let commentObj = {
        id: cCounter,
        avatar: `img/avatar-${getRandomInt(AVATAR_MIN, AVATAR_MAX)}.svg`,
        message: MESSAGES[getRandomInt(MESSAGES_MIN, MESSAGES_MAX)] + MESSAGES[getRandomInt(MESSAGES_MIN, MESSAGES_MAX)],
        name: NAMES[getRandomInt(NAMES_MIN, NAMES_MAX)],
      }
      cCounter++;
      return commentObj;
    })
  }
  counter++;
  return photoObj;
});