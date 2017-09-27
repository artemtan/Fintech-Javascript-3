const cache = { 0: 0, 1: 1};

function fibonacciWithCache(x) {
  if (x in cache) {
    return cache[x];
  }
  const num = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);

  cache[x] = num;
  return num;
}
