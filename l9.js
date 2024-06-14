// Insertion Sort O(n^2)
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let insertNumber = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > insertNumber) {
      arr[j + 1] = arr[j];
      j -= 1;
      console.log(arr[j + 1]);
    }
    arr[j + 1] = insertNumber;
  }
  return arr;
}
console.log(insertionSort([5, 12, 4, 2, 99, 45]));
console.log(insertionSort([2, 45, 13, 28, 56]));
