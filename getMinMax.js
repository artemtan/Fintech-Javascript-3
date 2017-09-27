function getMinMax(str) {
  let min = Infinity, max = -Infinity, x;

  while (string !== '') {
    while (isNaN(parseFloat(string[0])) && string[0] !== '-') {
      string = string.slice(1);
    }
    if (string === '') {
      break;
    }
    x = parseFloat(string);
    if (x > max) {
      max = x;
    }
    if (x < min) {
      min = x;
    }
    x += '';
    string = string.slice(x.length);
  }
  return {max: max, min: min};
}
