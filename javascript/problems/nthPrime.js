// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

function isPrime(num) {
    var isPrime = true;
    for(i = 2; i < num / 2; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

function findNthPrime(max) {
    var primes = [2];
    var i = 3;
    while(primes.length <= max) {
        if(isPrime(i)) {
            primes.push(i);
        }
        i++;
    }

    return primes[max];
}

console.log(findNthPrime(10001));