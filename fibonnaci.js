var max = 4000000;

var fib = [1, 2];
var evenFibs = [];
evenFibs.push(2);

var firstIndex = 0;
var secondIndex = 1;
var max = fib[firstIndex] + fib[secondIndex];
while(max < 4000000) {
    if(max % 2 === 0) {
        evenFibs.push(max);
    }
    fib.push(max);

    firstIndex++;
    secondIndex++;
    max = fib[firstIndex] + fib[secondIndex];
}

var sumEvenFibs = 0;
for(var i = 0; i < evenFibs.length; i++) {
    sumEvenFibs += evenFibs[i];
}

console.log(sumEvenFibs);