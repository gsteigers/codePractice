var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array2 = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']

function insertSort(array) {
    for(var i = 0; i < array.length; i++) {
        var temp = array[i];
        var j = i - 1;
        while(j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = temp;
        console.log(array);
    }

    return array;
}

console.log(insertSort(array));
console.log(insertSort(array2));