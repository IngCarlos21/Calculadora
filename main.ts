let currentValue: string = '';
let currentOperator: string = '';
let currentResult: number = 0;

function updateDisplay(value: string) {
  const displayElement = document.getElementById('display') as HTMLInputElement;
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


function handleButtonClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target) return;
  
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
      updateDisplay(currentValue);
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