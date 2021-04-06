const repeatString = function (word, numberOfRepeats) {


    if (numberOfRepeats<0){
        return 'ERROR';
    }
    let repeatedString = '';
   

  

        for (i = 1; i <= numberOfRepeats; i++) {

            repeatedString += word;

        }

        return repeatedString;
    


}

module.exports = repeatString
