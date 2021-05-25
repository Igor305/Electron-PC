const fs = require("fs");

let text = fs.readFileSync('info.txt','utf8') 

localStorage.setItem("numberBody",text);

/*window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }  
  replaceText('info', text);
})*/