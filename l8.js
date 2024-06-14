// Selection Sort O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
      }
      if (min != i) {
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
      }
    }
    return arr;
}

console.log(selectionSort([20, 12, 10, 15, 2]));
console.log(selectionSort([13,2,55,26, 1,4]));