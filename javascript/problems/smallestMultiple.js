var smallestMultiple = 2520;

function checkConditions(number) {
    for (i = 1; i <= 20; i++) {
        if(number % i !== 0) {
            return false;
        }
    }

    return true;
};

while(!checkConditions(smallestMultiple)) {
    smallestMultiple++;
}

console.log(smallestMultiple);