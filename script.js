let firstNum;
let secondNum;
let operator;

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
