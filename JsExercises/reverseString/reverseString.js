const reverseString = function(word) {

    let forwardString = word;
    let reversedString = '';
    let slicedString = forwardString;

    for (i=1; i<forwardString.length(); i++){

        reversedString += forwardString.substr(-1);
        forwardString = forwardString.slice(0,-1);

    }

    return reversedString;

}

module.exports = reverseString
