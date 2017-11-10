/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function throttle(time, callback) {
  let called = false;

  function callbackNew(...args) {
    if (called) {
      return;
    }
    callback(args);
    called = true;
    setTimeout(function() {
      called = false;
    }, time);
  }

  return callbackNew;
}


module.exports = { throttle };
