// Quick Sort
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const rightArray = [],
    leftArray = [];
  let povit = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > povit) rightArray.push(arr[i]);
    else leftArray.push(arr[i]);
  }
  return [...quickSort(leftArray), povit, ...quickSort(rightArray)];
}
console.log(quickSort([40, 3, 5, 1, 4, 6]));
console.log(quickSort([5, 3, 56, 1, 3, 5]));
