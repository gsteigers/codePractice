/**
 * Given an array that can contain subarrays, calculate the sum of all integers
 */

function sum(arr) {
    if(arr instanceof Array) {
        return arr.reduce(function(s, e) {
            return s + sum(e);
        }, 0);
    } else {
        return arr;
    }
}

function otherSum(arr) {
    if(arr instanceof Array) {
        var reducer = function(accumulator, currentVal) {
            return accumulator + sum(currentVal);
        }
        return arr.reduce(reducer);
    } else {
        return arr;
    }
}

function sumArray(arr) {
    var total = 0;
    if(arr.length === 0) {
        return 0;
    } else {
        if(arr instanceof Array) {
            return 
        } else {
            return arr;
        }
    }
}

console.log(
    "Total Sum = " + otherSum([10, 10, 10, [[], 10, 10, [10, [10, 10], 10], 10], 10])
)