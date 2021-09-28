import { createPreview } from './preview.js';
import { upload } from './upload.js';
import { validation } from './validation.js';
import { setSize, setEffect } from './picture-edit.js';
import { getData } from './server.js';


upload();
setSize();
setEffect();
validation();