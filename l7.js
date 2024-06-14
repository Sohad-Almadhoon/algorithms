/*
Sorting Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
*/

// Bubble Sort O(n^2)
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }           
        }
    }
    return arr;
}
console.log(bubbleSort([99, 2, 5, 6, 78, 33]))
console.log(bubbleSort([100 , 5, 2, 3,1 , 78]));
// i =0
//j = 0 => 2 99 5 6 ...
// j=1  => 2 5 99 6 ...
// j= 2 => 2 5 6 99 78 33
// j=3 => 2 5 6 78 99 33
// j=4 => 2 5 6 78 33 99
// j=5 => 2 5 6 78 33 99
// i =1
// j=3 => 2 5 6 33 78 99

