let elinput = document.querySelector(".js-input");
let elTextArea = document.querySelector(".js-textarea");


elinput.addEventListener("input", function () {
  
  
  const caesar = function (str, num) {
    let secret = '';
    for (let i = 0; i < str.length; i++) {
      let index = str.charCodeAt(i);
      if (index >= 65 && index <= 90) {
        secret += String.fromCharCode(index + num);
      } else (index >= 97 && index <= 122)
      secret += String.fromCharCode(index + num);
    }
    return secret;
  }
  elTextArea.textContent = elinput.value;
});

