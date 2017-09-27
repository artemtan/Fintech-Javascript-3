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
