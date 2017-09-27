function rle(input) {
  let symbol;
  let output = '';
  let i = 0;
  const len = input.length;

  while (i !== len) {
    let count = 1;

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
