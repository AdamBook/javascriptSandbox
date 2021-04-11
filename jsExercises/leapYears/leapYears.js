const leapYears = function (year) {

    if (year % 4 == 0 && !year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        else {
            //return false;
            return 'First';
        }

        return true;
    }
    else {
        
        //return false;
        return 'Second';

    }

}



module.exports = leapYears
