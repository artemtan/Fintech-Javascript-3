function rle(input) {
  let symbol, output = '', i = 0, count;
  const len = input.length;

  while (i !== len) {
    count = 1;
    symbol = input[i];
    i += 1;
    while (symbol === input[i]) {
      count += 1;
      i += 1;
    }
    if (count === 1) {
      output += symbol;
    } else {
      output += symbol + count;
    }
  }
  return output;
}
