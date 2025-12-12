const array = [2, 3, 4, 7, 11];

var findKthPositive = function (arr, k) {
  let missing = [];
  let num = 1;
  while (missing.length < k) {
    if(!arr.includes(num))
        missing.push(num);
    num++
  }
  return missing[k - 1];
};

console.log(findKthPositive(array, 5));
