/**
 * Given a range, calculate the difference between the sum of values squared and squaring the summed values
 */

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

function sumSquareDifference(numRange) {
    var sumSquare = sumOfSquares(numRange);
    var squareSum = squareOfSum(numRange);

    console.log("Sum of Squares: " + sumSquare);
    console.log("Square of Sum: " + squareSum);

    return squareSum - sumSquare;
}

console.log("Difference: " + sumSquareDifference(100));