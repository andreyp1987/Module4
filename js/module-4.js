// Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet) которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keybord =  alphabet.split('');
function addKeyboardLayout (value) {
const fullKeyboard = [keybord.slice(0, keybord.indexOf('a')), keybord.slice(keybord.indexOf('a'), keybord.indexOf('z')), keybord.slice(keybord.indexOf('z'))]
return fullKeyboard
};
console.log (addKeyboardLayout(alphabet));

// Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры и возвращает случайную букву из этой строки.

const KeyboardLayout = addKeyboardLayout(alphabet);
function getRandCharInRow(row) {
    const result = KeyboardLayout[row]
[Math.floor(Math.random()*KeyboardLayout[row].length)]
    return result;
};
console.log  (`Случайная буква из строки 0 = ${getRandCharInRow(0)}`);
console.log  (`Случайная буква из строки 1 = ${getRandCharInRow(1)}`);
console.log  (`Случайная буква из строки 2 = ${getRandCharInRow(2)}`);

// // Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.

function getRandCharInAlph() {
    const rand = Math.floor(Math.random()*(KeyboardLayout.length));
    const result = KeyboardLayout [rand]
[Math.floor(Math.random()*KeyboardLayout[rand].length)]
    return result;
};
console.log  (`Случайная буква алфавита = ${getRandCharInAlph()}`);
