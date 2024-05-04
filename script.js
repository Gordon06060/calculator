

function operate(op,x,y){
    if (op =='+'){
        addNumbers(x,y);
    }
    else if (op == '-'){
        subtractNumbers(x,y)
    }
    else if (op == '*'){
        subtractNumbers(x,y)
    }
    else if (op == '/'){
        subtractNumbers(x,y)
    }
}

function addNumbers(x,y){
    console.log(x+y);
}

function subtractNumbers(x,y){
    console.log(x-y);
    
}

function muiltiplyNumbers(x,y){
    console.log(x*y);

}

function divideNumbers(x,y){
    console.log(x/y);
}
operate('/',4,2);




//Calculator Display:
const display = document.querySelector('#display');
const screen = document.createElement('div');
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

let firstNum;
let secondNum;
let operator;





// When add is clicked
// Store displayValue in a firstNum 
// make displayValue = 0
// Make screen.textcontent = ''


//When = is clicked 
//store Displayvalue in secondNum 
// Call operator to preform operation
// make screen.textcontent = answer

