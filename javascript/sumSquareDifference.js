function sumOfSquares(numRange) {
    var sum = 0;
    for(var i = 1; i <= numRange; i++) {
        sum += (i * i);
    }

    return sum;
}

function squareOfSum(numRange) {
    var sum = 0;
    for(var i = 1; i <= numRange; i++) {
        sum += i;
    }

    return sum * sum;
}

var sumSquare = sumOfSquares(100);
var squareSum = squareOfSum(100);
var diff = squareSum - sumSquare;

console.log("Sum of Squares: " + sumSquare);
console.log("Square of Sum: " + squareSum);
console.log("Diff: " + diff);