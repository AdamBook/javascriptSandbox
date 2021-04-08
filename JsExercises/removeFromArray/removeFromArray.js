const removeFromArray = function(firstArray, ...moreArgs) {

        let incArray = firstArray;
        let copyOfArgs = Array.from(arguments);
        let removedArgs = [];
        let argsToRemove = [];
        let returningArgs = [];

        for (i=0; incArray.length; i++){
            if(incArray[i]==moreArgs[0]){
                removedArgs = incArray.splice(i,1);
            }
        }

        return incArray;
    

}

module.exports = removeFromArray
