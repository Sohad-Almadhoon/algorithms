// Merge Sort
function mergeSort(arr) {
  //Recursive Base
  if (arr.length < 2) return arr;
  //Recursive Case
  const mid = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
console.log(mergeSort([40, 3, 5, 1, 4, 6]));
console.log(mergeSort([5, 3, 56, 1, 3, 5]));
