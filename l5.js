// Search Algorithms (linear & binary) Search
// Linear search O(n)
function linearSearch(array , num) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === num) return i;
    }
    return -1;
}
console.log(linearSearch([1, 5, 7, 8, 9], 5));
console.log(linearSearch([8,6,3,5,7,2], 5));