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
