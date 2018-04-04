//Given a sequence String array, return a new sequence of the total number of items in the sequence followed by the value
// input: AAABBCCCADDEFFFFG
// output: 3A2B3CA2DE4FG

function sequencer(input) {
    if(input === null || input.length === 0) {
        return null;
    } else if(input.length == 1) {
        return input;
    } else {
        var output = "";

        var length = input.length;
        var element = input[0];
        var count = 1;
        
        for(var i = 1; i <= length - 1; i++) {
            if(input[i] === element) {
                count++
            } else {
                if(count > 1) {
                    output += count + element;
                } else {
                    output += element;
                }
                element = input[i];
                count = 1;
            }
        }

        if(input[length - 1] !== input[length - 2]) {
            output += input[input.length - 1];
        } else {
            output += count + element;
        }
        
        return output;
    }

    
}

console.log(sequencer("A"));
console.log(sequencer("AAAAAAABBBBB"));
console.log(sequencer("AAABBCCCADDEFFFFF"));
console.log(sequencer("AAABBCCCADDEFFFFG"));