const reverseString = function(word) {

    let forwardString = word;
    let reversedString = '';
    let slicedString = forwardString;
    let loopNumber = forwardString.length;

    for (i=1; i<=loopNumber; i++){

        reversedString += forwardString.substr(-1);
        forwardString = forwardString.slice(0,-1);

    }

    return reversedString;

}

module.exports = reverseString
