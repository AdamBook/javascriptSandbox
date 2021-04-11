const sumAll = function(intOne, intTwo) {

let smallestInt = 0;
let biggestInt = 0;


// Establish which int is smaller and bigger
if(intOne < intTwo){
    
    smallestInt = intOne;
    biggestInt = intTwo;
}
else{

    smallestInt = intTwo;
    biggestInt = intOne;
}

let loopCount = biggestInt - smallestInt;
let sum = 0;
let addNumber = smallestInt;

for (i=0;i<=loopCount;i++){

    sum +=addNumber;
    addNumber+=1;

}

return sum;

}

module.exports = sumAll
