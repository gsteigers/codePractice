var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array2 = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']
var array3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function topDownMergeSort(array) {
    console.log(array);

    if(array.length <= 1) {
        return array;
    }

    var middle = Math.floor(array.length / 2);
    var leftArray = array.slice(0, middle);
    var rightArray = array.slice(middle);

    return topDownMerge(topDownMergeSort(leftArray), topDownMergeSort(rightArray));
}

function topDownMerge(left, right) {
    var array = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    return array.concat(left).concat(right);
}

function bottomUpMergeSort(array) {
    var i = 1;
    while (i < array.length) {
        var left = 0;
        while(left + i < array.length) {
            bottomUpMerge(array, left, i);
            left += i * 2;
        }
        i = i * 2;
    }

    return array;
}

function bottomUpMerge(array, left, index) {
    console.log(array);
    var right = left + index;
    var temp = [];
    var leftPos = left;
    var rightPos = right;

    var end = array.length - 1;
    var calcEnd = (left + index * 2) - 1;
    if(calcEnd < array.length) {
        end = calcEnd;
    }

    for(var i = left; i <= end; i++) {
        if((array[leftPos] <= array[rightPos] || rightPos > end) && leftPos < right) {
            temp[i] = array[leftPos];
            leftPos++;
        } else {
            temp[i] = array[rightPos];
            rightPos++;
        }
    }

    for(var j = left; j <= end; j++) {
        array[j] = temp[j];
    }
}
  

console.log("MergeSort - TopDown");
console.log(topDownMergeSort(array));
console.log(topDownMergeSort(array2));
console.log(topDownMergeSort(array3));
console.log("MergeSort - BottomUp");
console.log(bottomUpMergeSort(array));
console.log(bottomUpMergeSort(array2));
console.log(bottomUpMergeSort(array3));