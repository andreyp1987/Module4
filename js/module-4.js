const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout (str) {
const keybord =  str.split(''); 
const fullKeyboard = [keybord.slice(0, keybord.indexOf('a')), keybord.slice(keybord.indexOf('a'), keybord.indexOf('z')), keybord.slice(keybord.indexOf('z'))]
return fullKeyboard
};
console.log (addKeyboardLayout(alphabet));
const KeyboardLayout = addKeyboardLayout(alphabet);


function getRandomItem(arr){
const randomItem = Math.floor(Math.random() * arr.length);
return randomItem;
}
  
function getRandCharInRow(row, callback) {
const randomStr = KeyboardLayout[row - 1];
const randomIndex = callback(randomStr);
return randomStr[randomIndex];
}

const getRow = +prompt('Введите номер строки от 1 до 3');
if ((isNaN(getRow))   || (getRow  % 1 !== 0) || (getRow  <= 0) || ( 3 < getRow) ) {
    alert("Недопустимое значение, проверте правильность ввода!")
}
  
const randomCharInRow1 = getRandCharInRow(getRow, getRandomItem)
console.log (`Случайный символ из ${getRow}-ой строки - ${randomCharInRow1}`)

function getRandCharInAlph (arr, callback) {  
const randomStr = callback(arr);
const randomChar = callback(arr[randomStr]);  
return arr[randomStr][randomChar];
}
  
const randomAlphabetChar = getRandCharInAlph(KeyboardLayout, getRandomItem);
console.log (`Случайный символ из случайной строки - ${randomAlphabetChar}`)
