var number = 600851475143;
var primes = [];

for(var i = 2; i <= number; i++) {
    if(number % i === 0) {
        var isPrime = true;
        for(var j = 2; j < (i / 2); j++) {
            if(i % j == 0) {
                isPrime = false;
            }
        }

        console.log(isPrime);
        if(isPrime) {
            number /= i;
            primes.push(i);
        }
    }
}

var max = primes[primes.length - 1];
console.log("max = " + max);