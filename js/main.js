
import { getRandomInt } from './randomGen.js';

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
let counter = 0;
let cCounter = 0;


export const photos = new Array(OBJECTS_COUNT).fill().map(function () {

  const photoObj = {
    id: counter,
    url: `photos/${counter}.jpg`,
    description: DESCRIPTIONS[counter],
    likes: getRandomInt(LIKES_MIN, LIKES_MAX),
    comments,
  }
  counter++;
  return photoObj;
})


const comments = new Array(COMMENTS_COUNT).fill().map(function () {
  {
    id: cCounter,
    avatar: `img/avatar-${getRandomInt(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Артём',
  }
}
)