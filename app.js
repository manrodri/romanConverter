const packageName = require('packageName');
const convertBtn = document.getElementById('convertBtn');
const numInput = document.getElementById('intnum');

let userInput = numInput.nodeValue;

console.log(userInput);

convertBtn.addEventListener('click', convertToRoman())