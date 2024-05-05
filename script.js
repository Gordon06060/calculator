

function operate(op,x,y){
    if (op =='+'){
        addNumbers(x,y);
    }
    else if (op == '-'){
        subtractNumbers(x,y)
    }
    else if (op == '*'){
        muiltiplyNumbers(x,y)
    }
    else if (op == '/'){
        divideNumbers(x,y)
    }
}

function addNumbers(x,y){
    screen.textContent=x+y;
}

function subtractNumbers(x,y){
    screen.textContent = x-y;
    
}

function muiltiplyNumbers(x,y){
    screen.textContent = x*y;

}

function divideNumbers(x,y){
    screen.textContent = x/y;
}




//Calculator Display:
const display = document.querySelector('#display');
let screen = document.createElement('div');
screen.classList.add('screen');
display.appendChild(screen);
let displayValue = '';


// Adding 1 to display when clicked
const button1 = document.querySelector('#one');
button1.addEventListener('click', toScreen1);
//Function that adds one to screen
function toScreen1(){
    const addOne = document.createElement('span');
    addOne.classList.add('one');
    addOne.textContent = '1';
    screen.appendChild(addOne);
    displayValue += 1;
};


//2
const button2 = document.querySelector('#two');
button2.addEventListener('click', toScreen2);
function toScreen2(){
    const addTwo = document.createElement('span');
    addTwo.classList.add('two');
    addTwo.textContent = 2;
    screen.appendChild(addTwo);
    displayValue += 2;

};
//3
const button3 = document.querySelector('#three');
button3.addEventListener('click', toScreen3);
function toScreen3(){
    const add3 = document.createElement('span');
    add3.classList.add('three');
    add3.textContent = 3;
    screen.appendChild(add3);
    displayValue += 3;
};

//4
const button4 = document.querySelector('#four');
button4.addEventListener('click', toScreen4);
function toScreen4(){
    const add4 = document.createElement('span');
    add4.classList.add('four');
    add4.textContent = 4;
    screen.appendChild(add4);
    displayValue += 4;
};

//5
const button5 = document.querySelector('#five');
button5.addEventListener('click', toScreen5);
function toScreen5(){
    const add5 = document.createElement('span');
    add5.classList.add('two');
    add5.textContent = 5;
    screen.appendChild(add5);
    displayValue += 5;
};

//6
const button6 = document.querySelector('#six');
button6.addEventListener('click', toScreen6);
function toScreen6(){
    const add6 = document.createElement('span');
    add6.classList.add('two');
    add6.textContent = 6;
    screen.appendChild(add6);
    displayValue += 6;
};

//7
const button7 = document.querySelector('#seven');
button7.addEventListener('click', toScreen7);
function toScreen7(){
    const add7 = document.createElement('span');
    add7.classList.add('two');
    add7.textContent = 7;
    screen.appendChild(add7);
    displayValue += 7;
};

//8
const button8 = document.querySelector('#eight');
button8.addEventListener('click', toScreen8);
function toScreen8(){
    const add8 = document.createElement('span');
    add8.classList.add('two');
    add8.textContent = 8;
    screen.appendChild(add8);
    displayValue += 8;
};

//9
const button9 = document.querySelector('#nine');
button9.addEventListener('click', toScreen9);
function toScreen9(){
    const add9 = document.createElement('span');
    add9.classList.add('two');
    add9.textContent = 9;
    screen.appendChild(add9);
    displayValue += 9;
};

//0
const button0 = document.querySelector('#zero');
button0.addEventListener('click', toScreen0);
function toScreen0(){
    const add0 = document.createElement('span');
    add0.classList.add('zero');
    add0.textContent = 0;
    screen.appendChild(add0);
    displayValue += 0;
};

let firstNum;
let secondNum;
let operator;




//Add
const addButton = document.querySelector('#add');
addButton.addEventListener('click', addition);
function addition(){
    if (operator !== undefined){
        secondNum = displayValue;
        operate('+', +firstNum, +secondNum);
        displayValue = screen.textContent;
        firstNum = displayValue;
        displayValue = '';
        screen.textContent = '';
    }
    else{
        firstNum = displayValue;
        screen.textContent='';
        displayValue = '';
        operator = '+';
    }
}

//When pressing add, I am: 
//taking whats on the dispay it on the screen
// assigning operator
//clearing screen
// clearing the displayvalue 
//Before assigning operator, check if operator has already been assigned
// Need to make it so that if another operator has been clicked, just calculate it and assign that to firstnum 

// subtract
const subButton = document.querySelector('#subtract');
subButton.addEventListener('click', subtraction);
function subtraction(){
    firstNum = displayValue;
    operator = '-';
    screen.textContent='';
    displayValue = '';
}


//divide 
const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', division);
function division(){
    firstNum = displayValue;
    operator = '/';
    screen.textContent='';
    displayValue = '';
}

//muiltiply
const muiltiplyButton = document.querySelector('#times');
muiltiplyButton.addEventListener('click', muiltiply);
function muiltiply(){
    firstNum = displayValue;
    operator = '*';
    screen.textContent='';
    displayValue = '';
}

//equal button 
const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', equals);
function equals(){
    secondNum = displayValue;
    if (operator == '+'){
        operate('+', +firstNum, +secondNum);
    }
    else if (operator == '-'){
        operate('-', +firstNum, +secondNum);
    }
    else if (operator == '/'){
        operate('/', +firstNum, +secondNum);
    }
    else if (operator == '*'){
        operate('*', +firstNum, +secondNum);
    }
}


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScreen);
function clearScreen(){
    screen.textContent='';
    displayValue = '';
}


// Add something where I can string together calculations, and if I add another operator it first calculate sthe previous calculation
// make it so that it calculates every time a second operator is pressed