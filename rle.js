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
