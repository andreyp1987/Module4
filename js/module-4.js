// Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
function addKeyboardLayout (value) {
const keybord =  value.split('') 
function newLineKeybord (arr, x, y) {return arr.slice(arr.indexOf(x), arr.indexOf(y)+1)};
const fullKeyboard = [newLineKeybord (keybord, 'q', ']'), newLineKeybord (keybord, 'a', "'"), newLineKeybord (keybord, 'z', '/')];
return value = fullKeyboard};
console.log (addKeyboardLayout(alphabet));

// Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.

const KeyboardLayout = addKeyboardLayout(alphabet);
function getRandCharInRow(row) {return row = KeyboardLayout[row][Math.floor(Math.random()*KeyboardLayout[row].length)]};
alert (`Случайная буква из строки 0 = ${getRandCharInRow(0)}`);
alert (`Случайная буква из строки 1 = ${getRandCharInRow(1)}`);
alert (`Случайная буква из строки 2 = ${getRandCharInRow(2)}`);

// Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

const keybordStr =  alphabet.split(''); 
function getRandCharInAlph() {return keybordStr[Math.floor(Math.random()*KeyboardLayout.length)]};
alert (`Случайная буква алфавита = ${getRandCharInAlph()}`);
