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
  
const randomCharInRow1 = getRandCharInRow(1, getRandomItem)
const randomCharInRow2 = getRandCharInRow(2, getRandomItem)
const randomCharInRow3 = getRandCharInRow(3, getRandomItem)
console.log (`Случайный символ из 1-ой строки - ${randomCharInRow1}`)
console.log (`Случайный символ из 2-ой строки - ${randomCharInRow2}`)
console.log (`Случайный символ из 3-ой строки - ${randomCharInRow3}`)
 
function getRandCharInAlph (arr, callback) {  
const randomStr = callback(arr);
const randomChar = callback(arr[randomStr]);  
return arr[randomStr][randomChar];
}
  
const randomAlphabetChar = getRandCharInAlph(KeyboardLayout, getRandomItem);
console.log (`Случайный символ из случайной строки - ${randomAlphabetChar}`)
