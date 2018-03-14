/**
 * Given a min and a max number, find the largest palindrome of the product of the 2 numbers
 */

function findMaxPalindrome(min, max) {
    var start = Math.floor(Date.now() / 1000);
    var maxPalindrome = 0;
    for(var i = min; i <= max; i++) {
        for(var j = min; j < max; j++) {
            var product = i * j;
            var prodStr = product.toString();
            var splitStr = prodStr.split("");
            var reverseArray = splitStr.reverse();
            var reversedStr = reverseArray.join("");

            if(prodStr === reversedStr) {
                if(product > maxPalindrome) {
                    maxPalindrome = product;
                }
            }
        }
    }

    //Curious to see the performance
    var end = Math.floor(Date.now() / 1000);
    console.log("Total Duration:" + (end - start));

    return maxPalindrome;
}

console.log(findMaxPalindrome(100, 999));
console.log(findMaxPalindrome(100, 1999));
console.log(findMaxPalindrome(100, 2999));
console.log(findMaxPalindrome(100, 3999));
console.log(findMaxPalindrome(100, 4999));
console.log(findMaxPalindrome(100, 5999));
console.log(findMaxPalindrome(100, 6999));
console.log(findMaxPalindrome(100, 7999));
console.log(findMaxPalindrome(100, 8999));
console.log(findMaxPalindrome(100, 9999));