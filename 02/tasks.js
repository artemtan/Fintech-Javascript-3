/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout((function(num) { logger(num); }), 100, i);
  }
}

/*
function timer(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    let tmp = i;
    setTimeout(() => {
      logger(tmp);
    }, 100);
  }
}
*/

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  function newFunc(...newArgs) {
    return func.apply(context, args.concat(newArgs));
  }
  return newFunc;
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (x === undefined) {
    return 0;
  }
  return function newSum(y) { return y !== undefined ? sum(x + y) : x; };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const letters = {};

  for (const index of first) {
    if (letters[index]) {
      letters[index]++;
    } else {
      letters[index] = 1;
    }
  }

  for (const index of second) {
    if (!letters[index]) {
      return false;
    }
    letters[index]--;
  }
  return true;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const answer = {};

  for (const index of arr) {
    answer[index] = index;
  }
  return Object.keys(answer).map(Number);
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const tmpArray = {};
  const result = [];

  for (const index of first) {
    if (tmpArray[index]) {
      tmpArray[index]++;
    } else {
      tmpArray[index] = 1;
    }
  }

  for (const index of second) {
    if (tmpArray[index]) {
      tmpArray[index]++;
    }
  }

  for (const key in tmpArray) {
    for (let i = 0; i < Math.floor(tmpArray[key] / 2); i++) {
      result.push(Number(key));
    }
  }
  return result;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let diff = false;

  for (const i in left) {
    if (left[i] !== right[i]) {
      if (diff) {
        return false;
      }
      diff = true;
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
