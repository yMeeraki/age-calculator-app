const date = 14
const month = 11
const year = 1995 

let days = 0;
let months = 0;
let years = 0;

const getPresentDate = () => {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth()+1;
    const todayYear = today.getFullYear();
    console.log(`${today}
        ${todayDate}
        ${todayMonth}
        ${todayYear}`)

}

getPresentDate()

const personAge = (date, month, year) => {

    // Calculating Present Date
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth()+1;
    const todayYear = today.getFullYear();

    // Checking for Leap year - 
    if(year%2 === 0 || year%400 === 0) {
        
        // February
        if(month === 2){
            if(date>=1 && date<=29){
                   days = date - todayDate;
                    months = month - todayMonth;
                    years = todayYear - year;
                   console.log(days)
                   console.log(months)
                   console.log(years)
            }
        }

         // April, June, September, and November
        else if(month === 11){
            if(date>=1 && date<=30){
                days = date - todayDate;
                months = month - todayMonth;
                years = todayYear - year;
               console.log(days)
               console.log(months)
               console.log(years)
            }
        }
    }

     // Non Leap Year
     else {

        // February
        if(month === 2){
            if(date>=1 && date<=28){
                days = date - todayDate;
                months = month - todayMonth;
                years = todayYear - year;
               console.log(days)
               console.log(months)
               console.log(years)
            }
        }

         // April, June, September, and November
        else if(month === 11){
            if(date>=1 && date<=30){
                    days = date - todayDate;
                    months = month - todayMonth;
                    years = todayYear - year;
                   console.log(days)
                   console.log(months)
                   console.log(years)
            }
        }
    }

    // return (days, months, years)

}


console.log(personAge(date, month, year))
