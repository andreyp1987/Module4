const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout (str) {
const keybord =  str.split(''); 
const fullKeyboard = [keybord.slice(0, keybord.indexOf('a')), keybord.slice(keybord.indexOf('a'), keybord.indexOf('z')), keybord.slice(keybord.indexOf('z'))]
return fullKeyboard
};
const KeyboardLayout = addKeyboardLayout(alphabet);

let getRow;
let rowIndex;

function getUserRow (callback) {
while (true) {  
  getRow = prompt('Введите номер строки от 1 до 3');
    if (getRow === null) {
      return;
};
  getRow = +getRow;
    if (Number.isInteger(getRow) && getRow <= 3 && getRow >= 1) { 
      rowIndex = getRow - 1;
        break;
};
};

const randIndex = callback(KeyboardLayout[rowIndex]);
console.log(`Случайный символ из ${getRow}-й строки - ${KeyboardLayout[rowIndex][randIndex]}`);
}
getUserRow(getRandomItem);

function getRandomItem(arr){
  return Math.floor(Math.random() * arr.length);
};
    
function getRandCharInAlph (arr, callback) {  
const randomStr = callback(arr);
const randomChar = callback(arr[randomStr]);  
  return arr[randomStr][randomChar];
}
  
const randomAlphabetChar = getRandCharInAlph(KeyboardLayout, getRandomItem);
console.log (`Случайный символ из случайной строки - ${randomAlphabetChar}`)