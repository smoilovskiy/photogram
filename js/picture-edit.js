let scaleValue = document.querySelector('.scale__control--value');
let scale = document.querySelector('.img-upload__scale');

let uploadImgPreview = document.querySelector('.img-upload__preview').querySelector('img');

let effect = document.querySelector('.effects__radio');
let effects = document.querySelectorAll('.effects__radio');

let sliderContainer = document.querySelector('.effect-level__slider');
let effectSelector = document.querySelector('.img-upload__effects');
let sliderField = document.querySelector('.img-upload__effect-level');


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

  noUiSlider.create(sliderContainer, {
    start: 0,
    tooltips: true,
    connect: true,
    range: {
      "min": 0,
      "max": 100
    }
  });

  sliderField.style.display = 'none';

  effects.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      setFilter(evt.target.value);
    })
  })

  function setFilter(effect) {

    let val;

    switch (effect) {
      case 'none':
        sliderField.style.display = 'none';
        break;
      case 'chrome':
        sliderField.style.display = 'block';
        sliderContainer.noUiSlider.on('update', function (values) {
          val = ((values.toString()) / 100).toFixed(2);
          uploadImgPreview.style.filter = `grayscale(${val})`;
        });
        break;
      case 'sepia':
        sliderField.style.display = 'block';
        sliderContainer.noUiSlider.on('update', function (values) {
          val = ((values.toString()) / 100).toFixed(2);
          uploadImgPreview.style.filter = `sepia(${val})`;
        });
        break;
      case 'marvin':
        sliderField.style.display = 'block';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = (values.toString());
          uploadImgPreview.style.filter = `invert(${val}%)`;
        });
        break;
      case 'phobos':
        sliderField.style.display = 'block';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 33).toFixed(1);
          uploadImgPreview.style.filter = `blur(${val}px)`;
        });
        break;
      case 'heat':
        sliderField.style.display = 'block';
        sliderContainer.noUiSlider.on('update', function (values) {
          let val = ((values.toString()) / 50 + 1).toFixed(1);
          uploadImgPreview.style.filter = `brightness(${val})`;
        });
        break;
    }
    sliderContainer.noUiSlider.reset();
    uploadImgPreview.value = effect;
  }
}