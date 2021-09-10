export function validation() {

  let hashtagsInput = document.querySelector('.text__hashtags');
  hashtagsInput.setAttribute("minlength", "30");
  hashtagsInput.setAttribute("maxlength", "100");

  hashtagsInput.addEventListener("change", function () {
    let hashtagsLowercase = hashtagsInput.value.toLowerCase();
    let hashtagsArray = hashtagsLowercase.split(' ');
    let charSet = /^[а-яА-ЯёЁa-zA-Z0-9]+$; //'abcdefghijklmnopqrstuvwxyz'

    if (hashtagsArray.length > 5) {
      console.log('Too many hashtags. Must be up to 5');
    }

    for (let i = 0; i < hashtagsArray.length; i++) {
      let hashtag = hashtagsArray[i];
      
      if (!hashtag.matchAll(charSet)) {
        console.log('Invalid symbols');
      }

      for (let j = 0; j < hashtag.length; j++) {
        if (hashtag[0] !== '#') {
          console.log('First character must be #')
          break;
        } 
      }
    }



    console.log(hashtagsArray);
  })

}