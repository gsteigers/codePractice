/**
 * Given a max value, find the largest prime number under that value
 */

function findMaxPrime(number) {
    var primes = [];
    //find all prime numbers
    for(var i = 2; i <= number; i++) {
        if(number % i === 0) {
            var isPrime = true;
            for(var j = 2; j < (i / 2); j++) {
                if(i % j == 0) {
                    isPrime = false;
                }
            }
    
            if(isPrime) {
                number /= i;
                primes.push(i);
            }
        }
    }

    return primes[primes.length - 1];
}

console.log(findMaxPrime(600851475143));