/**
 * Given a range and an array of integers, find the summation of all instances of each unique multiple of those integers
 */

function calcSumOfMultiples(range, multiples) {
    var uniqueMultiples = [];
    for(var i = 0; i < multiples.length; i++) {
        for(var j = multiples[i]; j < range; j += multiples[i]) {
            if(!uniqueMultiples.includes(j)) {
                uniqueMultiples.push(j);
            }
        }
    }

    var sumOfMultiples = 0;
    for(var k = 0; k < uniqueMultiples.length; k++) {
        sumOfMultiples += uniqueMultiples[k];
    }

    return sumOfMultiples;
}

console.log(calcSumOfMultiples(1000, [3,5]));