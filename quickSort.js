var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array2 = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']
  
  // classic implementation (with Hoare or Lomuto partition scheme, you can comment either one method or the other to see the difference)
//   function quicksort(array, left, right) {
//     left = left || 0;
//     right = right || array.length - 1;
  
//     var pivot = partitionLomuto(array, left, right); // you can play with both partition
//     // var pivot = partitionHoare(array, left, right); // you can play with both partition
  
//     if(left < pivot - 1) {
//       quicksort(array, left, pivot - 1);
//     }
//     if(right > pivot) {
//       quicksort(array, pivot, right);
//     }
//     return array;
//   }
  // Lomuto partition scheme, it is less efficient than the Hoare partition scheme
//   function partitionLomuto(array, left, right) {
//     var pivot = right;
//     var i = left;
  
//     for(var j = left; j < right; j++) {
//       if(array[j] <= array[pivot]) {
//         swap(array, i , j);
//         i = i + 1;
//       }
//     }
//     swap(array, i, j);
//     return i;
//   }

function quickSort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionLomuto(array, left, right);
    // var partition = partitionHoare(array, left, right);

    if(left < pivot -1) {
        quickSort(array, left, pivot - 1);
    }
    if(right > pivot) {
        quickSort(array, pivot, right);
    }

    return array;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function partitionLomuto(array, left, right) {
     var pivot = right;
     var i = left;
     for(var j = left; j < right; j++) {
         if(array[j] <= array[pivot]) {
             swap(array, i, j);
             i = i + 1;
         }
     }
     swap(array, i, j);
     return i;
}

function partitionHoare(array, low, high) {

}

function mergeSort(array) {

}

function shellSort(array) {

}

console.log(quickSort(array));
// console.log(insertSort(array2));