function findAmicableNumbers(max) {
 
    // Proper divisors
    function properDivisors(n) {
        if (n < 2) return [];
        else {
            var rRoot = Math.sqrt(n),
                intRoot = Math.floor(rRoot),
 
                lows = range(1, intRoot).filter(function (x) {
                    return (n % x) === 0;
                });
 
            return lows.concat(lows.slice(1).map(function (x) {
                return n / x;
            }).reverse().slice((rRoot === intRoot) | 0));
        }
    }
 
    // [m..n]
    function range(m, n) {
        var a = Array(n - m + 1),
            i = n + 1;
        while (i--) a[i - 1] = i;
        return a;
    }
 
    // Filter an array of proper divisor sums,
    // reading the array index as a function of N (N-1)
    // and the sum of proper divisors as a potential M
 
    var pairs = range(1, max).map(function (x) {
        return properDivisors(x).reduce(function (a, d) {
            return a + d;
        }, 0)
    }).reduce(function (a, m, i, lst) {
        var n = i + 1;
 
        return (m > n) && lst[m - 1] === n ? a.concat([[n, m]]) : a;
    }, []);

    return pairs;
 
}

function sumAmicableNumbers(max) {
    var sum = 0;

    var pairs = findAmicableNumbers(max);
    for(var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        sum += pair[0] + pair[1];
    }

    return sum;
}

console.log(findAmicableNumbers(10000));
console.log(sumAmicableNumbers(10000));