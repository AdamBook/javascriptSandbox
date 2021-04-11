const removeFromArray = function (...args) {

    let incArray = args[0];
    let newArray = [];

    incArray.forEach(

        function (item) {
            if (!args.includes(item)) {
                newArray.push(item);
            }
        })


}

module.exports = removeFromArray
