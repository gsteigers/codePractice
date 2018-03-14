var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array2 = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']

function quickSort(array, left, right, type) {
    left = left || 0;
    right = right || array.length - 1;

    console.log(array);

    var pivot;
    if(type === "lomuto") {
        pivot = partitionLomuto(array, left, right);
    } else {
        pivot = partitionHoare(array, left, right);
    }

    if(left < pivot -1) {
        quickSort(array, left, pivot - 1, type);
    }
    if(right > pivot) {
        quickSort(array, pivot, right, type);
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

function partitionHoare(array, left, right) {
    var pivot = Math.floor((left + right) / 2);

    while(left <= right) {
        while(array[left] < array[pivot]) {
            left++;
        }

        while(array[right] > array[pivot]) {
            right--;
        }

        if(left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    return left;
}

console.log(quickSort(array, null, null, "lomuto"));
console.log(quickSort(array2, null, null, "lomuto"));
console.log('\n')
console.log(quickSort(array, null, null, "hoare"));
console.log(quickSort(array2, null, null, "hoare"));