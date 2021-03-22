const repeatString = function(word, numberOfRepeats) {

    let repeatedString = word;

    for (i=1; i<numberOfRepeats; i++){

        repeatedString += word;

    }

    return repeatedString;

}

module.exports = repeatString
