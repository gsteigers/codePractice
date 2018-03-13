var multThree = [];

for(var i = 3; i < 1000; i += 3) {
    multThree.push(i);
}

for(var j = 5; j < 1000; j += 5) {
    if(!multThree.includes(j)) {
        multThree.push(j);
    }
}

var sumOfMultiples = 0;
for(var k = 0; k < multThree.length; k++) {
    sumOfMultiples += multThree[k];
}

console.log(sumOfMultiples);