var min = 100;
var max = 999;

var maxPalindrome = 0;
for(var i = 100; i <= max; i++) {
    for (var j = 100; j <= max; j++) {
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

console.log(maxPalindrome);