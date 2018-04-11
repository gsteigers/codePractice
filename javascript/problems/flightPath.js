
// Given a hashmap of Flights, and knowing the start, find the path from start to finish

// input:
// HashMap
// LA > Dallas
// Seattle > LA
// Dallas > NY 

// output:
// Seattle > LA > Dallas > NY

function findNextDest(arr, start) {
    for(var i = 0; i < arr.length; i++) {
        var flight = arr[i];
        if(flight.departure === start) {
            return flight.arrival;
        }
    }

    return null;
}

function findFlightPathFromArray(arr, start) {
    var flightPath = start + "->";
    var next = findNextDest(arr, start);
    while(next !== null) {
        flightPath += next + "->";
        next = findNextDest(arr, next);
    }
    return flightPath;
};

function findFlightPath(map, start) {
    var flightPath = start + "->";
    while(map[start] != null) {
        flightPath += map[start] + "->";
        start = map[start];
    }
    return flightPath;
};

var  jumbledArr = [
    {
        departure: "LA",
        arrival: "Dallas"
    },
    {
        departure: "Seattle",
        arrival: "LA"
    },
    {
        departure: "Dallas",
        arrival: "NY"
    }
];
console.log(findFlightPathFromArray(jumbledArr, "Seattle"));
console.log(findFlightPathFromArray(jumbledArr, "LA"));

var jumbledMap = {};
jumbledMap["LA"] = "Dallas";
jumbledMap["Seattle"] = "LA";
jumbledMap["Dallas"] = "NY";
console.log(findFlightPath(jumbledMap, "Seattle"));
console.log(findFlightPath(jumbledMap, "LA"));