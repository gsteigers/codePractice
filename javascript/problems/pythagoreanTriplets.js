/**
 A Pythagorean triplet is a set of three natural numbers, a < b < c, for which:
    a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

 function findPythagoreanTriplet(total) {
     var a,b,c = 0;
     for (a = 1; a < (total / 2); a++) {
        for (b = a; b < total; b++) {
          var c = Math.sqrt((a * a) + (b * b));
          if ((c > b) && (Number.isInteger(c)) && (a + b + c == total)) {
            console.log("A: " + a + " B: " + b + " C: " + c);
            return a * b * c;
          }
        }
      };

      return null;
 }

 console.log(findPythagoreanTriplet(1000));