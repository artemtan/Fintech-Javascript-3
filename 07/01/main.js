const input = document.querySelector('.phone-input');
const link = document.querySelector('.phone-link');

const digitCodes = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
const delCode = 8;
const base = 3;

function getLink() {
  const value = input.value.split('');
  let number = '';

  for (const i in value) {
    if (value[i] !== '+' && value[i] !== '(' && value[i] !== ')' && value[i] !== '-' && value[i] !== '_') {
      number += value[i];
    }
  }
  if (number.length === 11) {
    link.textContent = 'Позвонить на ' + input.value;
    link.href = 'tel:' + number;
  } else {
    link.textContent = 'Введите номер';
    link.href = '';
  }
}

function printDigit(key) {
  let position = input.selectionStart;

  if (position === input.value.length) {
    return;
  }
  if (position < base) {
    position = base;
  }
  const value = input.value.split('');

  while (value[position] === ')' || value[position] === '-') {
    position++;
  }
  value[position] = event.key;
  input.value = value.join('');
  input.setSelectionRange(position + 1, position + 1);
}

function deleteDigit() {
  let position = input.selectionStart;

  if (position === base) {
    return;
  }
  const value = input.value.split('');

  while (value[position - 1] === '-' || value[position - 1] === ')') {
    position--;
  }
  value[position - 1] = '_';
  input.value = value.join('');
  input.setSelectionRange(position - 1, position - 1);
}

function DigitCheck(event) {
  if (digitCodes.has(event.key)) {
    event.preventDefault();
    printDigit(event.key);
  } else {
    event.preventDefault();
  }
  if (event.keyCode === delCode) {
    event.preventDefault();
    deleteDigit();
  }
  getLink();
}

input.addEventListener('keydown', DigitCheck);
