function getMinMax(str) {
  let min = Infinity, max = -Infinity, x;
  let sep = /;?,?\s+/;
  const arr = str.split(sep);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    //console.log(arr[i]);
    if (isNaN(arr[i])) {
      continue;
    } else {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i]);
    }
  }
  return {max: max, min: min};
}
