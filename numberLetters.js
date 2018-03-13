
var digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy","eigty", "ninety"];
var hundred = "hundred";
var thousand = "thousand";

function buildThousand() {
    var thousandString = "";
    var prefix = ""

    for(i = 0; i < 10; i++) {
        if(i > 0) {
            prefix = digits[i] + hundred + "and";
            thousandString += digits[i] + hundred;
        }
        thousandString += buildHundreds(prefix);
    }

    thousandString += "onethousand";

    return thousandString;
}

function buildHundreds(prefix) {
    var hundredString = "";
    hundredString += buildFirstDigits(prefix);

    for(var i = 2; i < 10; i++) {
        hundredString += prefix + tens[i];
        hundredString += buildTens(prefix + tens[i]);
    }

    return hundredString;
}

function buildTens(prefix) {
    var tenString = "";
    for(var i = 1; i <= 9; i++) {
        tenString+= prefix + digits[i];
    }

    return tenString;
}

function buildFirstDigits(prefix) {
    var prefix = prefix || "";
    var numberString = "";
    for(var i = 1; i < 20; i++) {
        numberString += prefix + digits[i];
    }

    return numberString;
}

var test = buildThousand();
console.log(test);
console.log(test.length);