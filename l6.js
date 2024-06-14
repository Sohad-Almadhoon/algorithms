// Binary Search O(log n)
// 2 5 8 5 12 7 =>  12

function binarySearch(arr, num) {
    let l = 0,
        r = arr.length - 1 ;
  while (l <= r) {
      const middle = Math.floor((r + l) / 2);
      if (arr[middle] === num) return middle;
      if (arr[middle] < num) {
          l = middle + 1;
      }
      else {
          r = middle - 1;
      }
    }
}
console.log(binarySearch([2, 5, 8, 5, 12, 7], 8));

