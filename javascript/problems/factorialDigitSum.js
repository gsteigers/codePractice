
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 


function factorialDigitSum(num) {
    var f = [];
    var digits = [];

    f = factorial(num);
    digits = (f).toString(10).split("").map(function(t){return parseInt(t)})
    console.log(digits);
}


factorialDigitSum(100);