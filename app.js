let display = document.getElementById('display');

// Numbers
let num1 = document.getElementById('1');
let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');
let num5 = document.getElementById('5');
let num6 = document.getElementById('6');
let num7 = document.getElementById('7');
let num8 = document.getElementById('8');
let num9 = document.getElementById('9');
let num0 = document.getElementById('0');

num1.addEventListener('click', () => {
    display.textContent += num1.textContent;
});

num2.addEventListener('click', () => {
    display.textContent += num2.textContent;
});

num3.addEventListener('click', () => {
    display.textContent += num3.textContent;
});

num4.addEventListener('click', () => {
    display.textContent += num4.textContent;
});

num5.addEventListener('click', () => {
    display.textContent += num5.textContent;
});
num6.addEventListener('click', () => {
    display.textContent += num6.textContent;
});
num7.addEventListener('click', () => {
    display.textContent += num7.textContent;
});

num8.addEventListener('click', () => {
    display.textContent += num8.textContent;
});

num9.addEventListener('click', () => {
    display.textContent += num9.textContent;
});

num0.addEventListener('click', () => {
    display.textContent += num0.textContent;
});

let cleanDisplay = document.getElementById('clean');
cleanDisplay.addEventListener('click', () => {
    display.innerHTML = '<p></p>';
});

let modulo = document.getElementById('modulo');
modulo.addEventListener('click', () => {
    display.textContent += modulo.textContent;
});

let divide = document.getElementById('divide');
divide.addEventListener('click', () => {
    display.textContent += divide.textContent;
});

let multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    display.textContent += multiply.textContent;
});

let addition = document.getElementById('addition');
addition.addEventListener('click', () => {
    display.textContent += addition.textContent;
});

let subtraction = document.getElementById('substraction');
substraction.addEventListener('click', () => {
    display.textContent += subtraction.textContent;
});

let dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    display.textContent += dot.textContent;
});

// Works only with 2 numbers
let equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    let storeDisplay = display.textContent;
    let result = 0;
    // Find where the operator is and calculates the result
    for (let i = 0; i < storeDisplay.length; i++) {
        if (isNaN(storeDisplay[i])) {
            let a = storeDisplay.substring(0, i);
            let b = storeDisplay.substring(i+1, storeDisplay.length);
            switch (storeDisplay[i]) {
                case '%':
                    result = moduloFunc(a, b);
                    break;
                case '/':
                    result = divideFunc(a, b);
                    break;
                case 'X':
                    result = multiplyFunc(a, b);
                    break;
                case '+':
                    result = sumFunc(a, b);
                    break;
                case '-':
                    result = substractFunc(a, b);
                    break;
            }
        }
    }
    display.innerHTML = result;
});

function sumFunc(a, b) {return parseInt(a, 10) + parseInt(b, 10);}
function substractFunc(a, b) {return parseInt(a, 10) - parseInt(b, 10);}
function multiplyFunc(a, b) {return parseInt(a, 10) * parseInt(b, 10);}
function divideFunc(a, b) {return parseInt(a, 10) / parseInt(b, 10);}
function moduloFunc(a, b) {return parseInt(a, 10) % parseInt(b, 10);}
