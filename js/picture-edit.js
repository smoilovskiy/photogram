let scaleValue = document.querySelector('.scale__control--value');
let scale = document.querySelector('.img-upload__scale');

let uploadImgPreview = document.querySelector('.img-upload__preview').querySelector('img');

let effect = document.querySelector('.effects__radio');
// let effects = document.querySelectorAll('.effects__radio');

let sliderContainer = document.querySelector('.effect-level__slider');
let effectSelector = document.querySelector('.img-upload__effects');


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
      start: 0,
      tooltips: true,
      connect: true,
      range: {
        "min": 0,
        "max": 100
      }
    });

    effectSelector.addEventListener('click', function (evt) {

      if (evt.target.value === 'none') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'none';
        
        sliderContainer.noUiSlider.on('update', function () {
          uploadImgPreview.style.filter = 'none';
        });

      }

      if (evt.target.id === 'effect-chrome') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'chrome';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 100).toFixed(2);
          uploadImgPreview.style.filter = `grayscale(${val})`;
        });
      }

      if (evt.target.id === 'effect-sepia') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'sepia';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 100).toFixed(2);
          uploadImgPreview.style.filter = `sepia(${val})`;
        });
      }

      if (evt.target.id === 'effect-marvin') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'marvin';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = (values.toString());
          uploadImgPreview.style.filter = `invert(${val}%)`;
        });
      }

      if (evt.target.id === 'effect-phobos') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'phobos';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 33).toFixed(1);
          uploadImgPreview.style.filter = `blur(${val}px)`;
        });  
      }

      if (evt.target.id === 'effect-heat') {
        sliderContainer.noUiSlider.reset();
        uploadImgPreview.value = 'heat';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 50 + 1).toFixed(1);
          console.log(val);
          uploadImgPreview.style.filter = `brightness(${val})`;
        });  
      }

    })

  }


}