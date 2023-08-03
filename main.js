"use strict";

let currentValue = '';
let currentOperator = '';
let currentResult = 0;
function updateDisplay(value) {
    const displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.value = value;
    }
}
function calculate() {
    const currentValueNum = parseFloat(currentValue);
    const previousResultNum = parseFloat(currentResult.toString());
    switch (currentOperator) {
        case '+':
            currentResult = previousResultNum + currentValueNum;
            break;
        case '-':
            currentResult = previousResultNum - currentValueNum;
            break;
        case '*':
            currentResult = previousResultNum * currentValueNum;
            break;
        case '/':
            currentResult = previousResultNum / currentValueNum;
            break;
    }
    currentValue = '';
    currentOperator = '';
    updateDisplay(currentResult.toString());
}
function handleButtonClick(event) {
    const target = event.target;
    if (!target)
        return;
    const value = target.dataset.value;
    const operator = target.dataset.operator;
    if (value) {
        currentValue += value;
        updateDisplay(currentValue);
    }
    if (operator) {
        currentOperator = operator;
        if (currentValue !== '') {
            calculate();
        }
    }
    if (target.id === 'clear') {
        currentValue = '';
        currentOperator = '';
        currentResult = 0;
        updateDisplay('');
    }
    if (target.id === 'calculate') {
        calculate();
    }

    if (target.id === 'integrantes') {
        updateDisplay('Carlos San Martin / Julian Rodriguez');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    });
});
