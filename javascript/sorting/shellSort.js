var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var array2 = ['a', 'l', 'p', 'h', 'a', 'b', 'e', 't']

function shellSort(array) {
    var increment = array.length / 2;
    while (increment > 0) {
        for (var i = increment; i < array.length; i++) {
            console.log(array);
            var j = i;
            var temp = array[j];
    
            while (j >= increment && array[j-increment] > temp) {
                array[j] = array[j-increment];
                j = j - increment;
            }
    
            array[j] = temp;
        }
    
        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment*5 / 11);
        }
        console.log(increment);
    }
  return array;
}

console.log(shellSort(array));
console.log(shellSort(array2));