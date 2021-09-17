import { createPreview } from './preview.js';
import { showBigImage } from './big-picture.js';
import { photos } from './photosTempGen.js';
import { upload } from './upload.js';
import { validation } from './validation.js';
import { resize } from './img-resize.js';

console.log(photos[0]);

for (let i = 0; i < photos.length; i++) {
  createPreview(photos[i]);
}

showBigImage(photos);
upload();
resize();
validation();