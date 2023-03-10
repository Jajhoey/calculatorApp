const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#equal');
const result = document.querySelector('.result');

let currentNumber = '';
let previousNumber = '';
let currentOperator = null;
let calculationDone = false;

function clear() {
	currentNumber = '';
	previousNumber = '';
	currentOperator = null;
	result.textContent = '0';
}

function calculate() {
	let calculation;

	switch (currentOperator) {
		case '+':
			calculation = parseFloat(previousNumber) + parseFloat(currentNumber);
			break;
		case '-':
			calculation = parseFloat(previousNumber) - parseFloat(currentNumber);
			break;
		case '*':
			calculation = parseFloat(previousNumber) * parseFloat(currentNumber);
			break;
		case '/':
			calculation = parseFloat(previousNumber) / parseFloat(currentNumber);
			break;
		default:
			return;
	}

	result.textContent = calculation;
	calculationDone = true;
	currentNumber = '';
	previousNumber = '';
	currentOperator = null;
}

function handleNumber(number) {
	if (calculationDone) {
		clear();
		calculationDone = false;
	}

	currentNumber += number;
	result.textContent = currentNumber;
}

function handleOperator(operator) {
	if (currentOperator) {
		calculate();
	}

	previousNumber = currentNumber;
	currentNumber = '';
	currentOperator = operator;
  result.textContent = operator;

}

clearButton.addEventListener('click', clear);

equalButton.addEventListener('click', calculate);

buttons.forEach(button => {
	button.addEventListener('click', () => {
		if (button.classList.contains('operator')){
			handleOperator(button.value);
		}else if (button.classList.contains('equal')){

    }else{
			handleNumber(button.value);
		}
	});
});
