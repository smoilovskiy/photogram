export function validation() {

  let hashtagsInput = document.querySelector('.text__hashtags');

  hashtagsInput.addEventListener("change", function () {
    let hashtagsLowercase = hashtagsInput.value.toLowerCase();
    let hashtagsArray = hashtagsLowercase.split(' ');


    if (hashtagsArray.length > 5) {
      console.log('Too many hashtags. Must be up to 5');
      hashtagsInput.setCustomValidity('Too many hashtags. Must be up to 5');
        return;
    }

    for (var i = 0; i < hashtagsArray.length; i++) {
      if (hashtagsArray[i] === '#' || hashtagsArray[i].length === 1) {
        hashtagsInput.setCustomValidity('Hashtag must contains more than 1 symbol');
        break;
      }
      if (hashtagsArray[i].length > 20) {
        hashtagsInput.setCustomValidity('Hashtags length can not be bigger than 20');
        break;
      }
      if (hashtagsArray[i].charAt(0) !== '#') {
        hashtagsInput.setCustomValidity('Hashtag must starts with #');
        break;
      }

      for (var j = i + 1; j < hashtagsArray.length; j++) {
        if (hashtagsArray[j] === hashtagsArray[i]) {
          hashtagsInput.setCustomValidity('Hashtags cannot be repeated');
          return;
        }
      }
    }

    console.log(hashtagsArray);
  })

}