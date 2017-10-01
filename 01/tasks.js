/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let min = Infinity;
  let max = -Infinity;
  const sep = /;?,?\s+/;
  const arr = string.split(sep);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (!isNaN(arr[i])) {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
  }
  return { max, min };
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const cache = { 0: 0, 1: 1 };

function fibonacciWithCache(x) {
  if (x in cache) {
    return cache[x];
  }
  const num = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);

  cache[x] = num;
  return num;
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let str = '';
  const len = Math.ceil((max + 1) / cols);

  for (let i = 0; i < len; i++) {
    let num = i;

    for (let j = 0; j < cols; j++) {
      if (num > max) {
        break;
      }
      if (num < 10) {
        str += ' ' + num + ' ';
      } else {
        str += num + ' ';
      }
      num += len;
    }
    str = str.slice(0, -1);
    str += '\n';
  }
  str = str.slice(0, -1);
  return str;
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let symbol;
  let output = '';
  let i = 0;
  const len = input.length;

  while (i !== len) {
    let count = 1;

    symbol = input[i];
    i++;
    while (symbol === input[i]) {
      count++;
      i++;
    }
    if (count === 1) {
      output += symbol;
    } else {
      output += symbol + count;
    }
  }
  return output;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
