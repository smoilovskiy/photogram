let scaleValue = document.querySelector('.scale__control--value');
let scale = document.querySelector('.img-upload__scale');
let uploadImgPreview = document.querySelector('.img-upload__preview').querySelector('img');
let effect = document.querySelector('.effects__radio');
let effects = document.querySelectorAll('.effects__radio');

let sliderContainer = document.querySelector('.effect-level__slider');


const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP_VALUE = 25;

let currentValue = MAX_VALUE;

export function setSize() {

  scaleValue.value = MAX_VALUE + '%';

  scale.addEventListener('click', function (evt) {

    if (evt.target.className === 'scale__control  scale__control--smaller') {
      if (currentValue !== MIN_VALUE) {
        currentValue -= STEP_VALUE;
        changeScaleValue();
      }
    }

    if (evt.target.className === 'scale__control  scale__control--bigger') {
      if (currentValue !== MAX_VALUE) {
        currentValue += STEP_VALUE;
        changeScaleValue();
      }
    }

  })
}

function changeScaleValue() {
  scaleValue.value = currentValue + '%';
  uploadImgPreview.style.transform = `scale(${currentValue / 100})`;
}

export function setEffect() {
   

  uploadImgPreview.classList.add(`effects__preview--none`);
  if (effect) {

    noUiSlider.create(sliderContainer, {
      start: 50,
      tooltips: true,
      connect: true,
        range: {
            "min": 0,
            "max": 100
        }
    });


      effects.forEach((elem) => {
      elem.addEventListener('change', function (evt) {
        let item = evt.target.value;
        uploadImgPreview.className = `effects__preview--${item}`;

        sliderContainer.noUiSlider.on('update', function( values, handle ) {
          let val = ((values.toString()) / 100).toFixed(2);
          console.log(val);
          uploadImgPreview.style.filter = `grayscale(${val})`;

       });


      });
    });
  }
}