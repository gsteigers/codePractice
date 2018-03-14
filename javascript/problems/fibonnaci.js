/**
 * Given a max value, calculate the sum of all even numbers in the fibonacci sequence 
 * that doesn't exceed that max
 */

 var max = 4000000;
 
 function sumEvenFib(max) {
     var fibonacci = [1, 2];
     var evenFibs = [2];

     var first = 0;
     var second = 1;
     var next = fibonacci[first] + fibonacci[second];
     while(next < max) {
         if(next % 2 === 0) {
             evenFibs.push(next);
         }

         fibonacci.push(next);
         first++;
         second++;
         next = fibonacci[first] + fibonacci[second];
     }

     var sum = 0;
     for(var i = 0; i < evenFibs.length; i++) {
         sum += evenFibs[i];
     }

     return sum;
 }

console.log(sumEvenFib(max));