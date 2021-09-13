export function validation() {

  let hashtagsInput = document.querySelector('.text__hashtags');

  

  hashtagsInput.addEventListener("change", function () {
    let hashtagsLowercase = hashtagsInput.value.toLowerCase();
    const specialSymbols = `!@$%^&*()+=-[]\\\';,./{}|\":<>?`;
    let hashtagsArray = hashtagsLowercase.split(' ');


    for (let i = 0; i < hashtagsLowercase.length; i++) {
      if (specialSymbols.indexOf(hashtagsLowercase.charAt(i)) != -1) {
        hashtagsInput.setCustomValidity('Use of special characters is not allowed');
        return;
      }
    }

    if (hashtagsArray.length > 5) {
      console.log('Too many hashtags. Must be up to 5');
      hashtagsInput.setCustomValidity('Too many hashtags. Must be up to 5');
      displayInvalid();
      return;
    }

    for (var i = 0; i < hashtagsArray.length; i++) {

      if (hashtagsArray[i] === '#' || hashtagsArray[i].length === 1) {
        hashtagsInput.setCustomValidity('Hashtag must contains more than 1 symbol');
        displayInvalid();
        break;

      } else if (hashtagsArray[i].length > 20) {
        hashtagsInput.setCustomValidity('Hashtags length can not be bigger than 20');
        displayInvalid();
        break;

      } else if (hashtagsArray[i].charAt(0) !== '#') {
        hashtagsInput.setCustomValidity('Hashtag must starts with #');
        displayInvalid();
        break;

      } else if (hashtagsArray[i].includes(' ')) {
        hashtagsInput.setCustomValidity('Space detected');
        displayInvalid();
        break;

      } else {
        hashtagsInput.setCustomValidity('');
      }

      for (let j = i + 1; j < hashtagsArray.length; j++) {
        if (hashtagsArray[j] === hashtagsArray[i]) {
          hashtagsInput.setCustomValidity('Hashtags cannot be repeated');
          displayInvalid();
          return;
        }
      }

    }

    console.log(hashtagsArray);
  })

  function displayInvalid() {
    hashtagsInput.style.border = '2px solid red'; 
  }

}