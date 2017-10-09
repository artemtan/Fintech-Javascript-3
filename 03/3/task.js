/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    const resolveValues = [];
    let counter = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(function(result) {
        resolveValues[i] = result;
        counter++;
      }, reject).then(function() {
        if (counter === promises.length) {
          resolve(resolveValues);
        }
      });
    }
  });
}

module.exports = promiseAll;
