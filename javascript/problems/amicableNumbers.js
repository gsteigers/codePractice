
//calculate proper divisors
function properDivisors(num) {
    var divisors = [];
    for(var i = 1; i < num / 2; i++) {
        if(num % i == 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

function sumOfDivisors(num) {
    var divisors = properDivisors(num);
    var sum = 0;
    for(var i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    return sum;
}

function isAmicable(a, b) {
    return (sumOfDivisors(a) === b && sumOfDivisors(b) === a);
}

function sumAmicableNumbers(divisors) {
    var sum = 0;
    for(var i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }

    return sum;
}

function findAmicableNumbers(num) {
    var amicable = [];
    for(var i = 1; i < num; i++) {
        for(var j = 1; j < num; j++) {
            if(isAmicable(i, j)) {
                amicable.push(i);
                amicable.push(j);
            }
        }
    }
    return amicable;
}

// var divisors = properDivisors(10000);
// console.log(divisors);
// console.log(sumAmicableNumbers(divisors));
console.log(findAmicableNumbers(10000))