let scaleValue = document.querySelector('.scale__control--value');
let scale = document.querySelector('.img-upload__scale');
let uploadImgPreview = document.querySelector('.img-upload__preview').querySelector('img');
let effects = document.querySelectorAll('.effects__radio');
let sliderContainer = document.querySelector('.effect-level__slider');
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
    sliderContainer.noUiSlider.reset();
    uploadImgPreview.value = effect;
    sliderContainer.noUiSlider.on('update', function (values) {
      let updatedVal = calculator(values, effect);
      uploadImgPreview.style.filter = updatedVal;
    });
  }

  function calculator(values, effect) {
    let formula, val;

    switch (effect) {
      case 'none':
        sliderField.style.display = 'none';
        break;
      case 'chrome':
        sliderField.style.display = 'block';
        formula = ((values.toString()) / 100).toFixed(2);
        val = `grayscale(${formula})`;
        break;
      case 'sepia':
        sliderField.style.display = 'block';
        formula = ((values.toString()) / 100).toFixed(2);
        val = `sepia(${formula})`;
        break;
      case 'marvin':
        sliderField.style.display = 'block';
        formula = (values.toString());
        val = `invert(${formula}%)`;
        break;
      case 'phobos':
        sliderField.style.display = 'block';
        formula = ((values.toString()) / 33).toFixed(1);
        val = `blur(${formula}px)`;
        break;
      case 'heat':
        sliderField.style.display = 'block';
        formula = ((values.toString()) / 50 + 1).toFixed(1);
        val = `brightness(${formula})`;
        break;

    }
    return val;
  }
}