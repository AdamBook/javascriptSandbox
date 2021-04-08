const removeFromArray = function() {


        let copyOfArgs = [];
        let argsToRemove = [];

        for (i=0; i<arguments.length; i++){

            copyOfArgs[i] = arguments[i];

        }
    

        for (i=0; i<copyOfArgs.length; i++){

            for (b=0; b<arguments.length; b++){

                if (copyOfArgs[i] == arguments[b]){
                    argsToRemove += arguments[b];
                }
            }

        }




        return returningArgs;

}

module.exports = removeFromArray
