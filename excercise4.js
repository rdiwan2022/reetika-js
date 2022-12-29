1.
const age = prompt("Enter your age:");
if (age > 10) {
    console.log("You are old enough to drive' ")
} else {
    const difference = (18 - age);
    console.log(`"wait for ${difference} years to turn 18."`);
}

Ans:You are old enough to drive' 
wait for 12 years to turn 18."

2.

const yourage1 = prompt("Enter your your age:");
const myage1 = prompt("Enter your myage:");
let difference1 = (yourAge1 - myage1);
let diff = console.log(difference);
if (yourage1 > myage1) {
    console.log(`"You are ${difference1} years older than me"`)
} else {

    console.log(`"you are younger than me"`);
}


3.
const a = prompt("Enter a value:");
const b = prompt("Enter b value:");
a > b ? console.log(`"${a} is greator than ${b} "`) : console.log(`"${a} is less than ${b} "`);


VM64: 5 "5 is greator than 1 "
2 is less than 6 "

4.
const number = prompt("Enter a number");
const remainder = console.log(number % 2);
if (remainder === 0) {
    console.log("2 is an even number");
}

else ()
{
    console.log("2 is an even number");
}









Exercise: 2

1.
const score = Number(prompt("Enter a score:"));
if (score > 80 && score < 100) {
    console.log(`"Score is A ${score} "`);
}
elseif((score > 70 && score < 80))
{ console.log(`"Score is B ${score} "`) };
elseif((score > 60 && score < 69))
{ console.log(`"Score is C ${score} "`) };
elseif((score > 50 && score < 59))
{ console.log(`"Score is D ${score} "`) };
elseif((score > 0 && score < 49))
{ console.log(`"Score is F ${score} "`) };

2.

const score = Number(prompt("Enter a score:"));
if (score > 80 && score < 100)
 {    
    console.log(`"Score is A ${score} "`)}
else if (score > 70 && score < 80) { console.log(`"Score is B ${score} "`) }
else if (score > 60 && score < 69) { console.log(`"Score is C ${score} "`) }
else if ((score > 50 && score < 59)) { console.log(`"Score is D ${score} "`) }
else if ((score > 0 && score < 49)) { console.log(`"Score is F ${score} "`) }


3. const Month = (prompt("Enter a Month"));
if (Month == "September" || Month == "October" || Month == "November")
 {    
    console.log("Season is Autumn")}
else if (Month == "December" || Month == "January " || Month == "February") { console.lo("Season is Winter")}
else if (Month == "March" || Month == "April  " || Month == "May") { console.log("Season is Spring")}
else if (Month == "June" || Month == "July   " || Month == "August") { console.log("Season is Summer")}

4.const Day = (prompt("What is the day  today?"));
if (Day == "Saturday" || Day== "Sunday" )
 {    
    console.log(`"${Day} is a Weekend"`)}
else if (Day == "Monday" || Day== "Tuesday"|| Day== "Wednesday" ||Day== "Thursday" || Day== "Friday") { console.log(`"${Day} is a Week Day"`)}


const Day1 = (prompt("What is the day  today?").toLowerCase());
if (Day1 == "saturday" || Day1== "sunday" )
 {    
    console.log(`"${Day1} is a Weekend"`)}
else if (Day == "monday" || Day1== "tuesday"|| Day1== "wednesday" ||Day1== "thursday" || Day1== "friday") { console.log(`"${Day1} is a Week Day"`)}





5. 
const Month1 = (prompt("Enter a Month?"));
if (Month1 == "January" || Month1== "March" || Month1== "May" || Month1== "July" || Month1== "August"|| Month1== "october"|| Month1== "December")
 {    
    console.log(`"${Month1} has 31 Days"`)}
else if (Month1 == "April" || Month1== "June"|| Month1== "September" ||Month1== "November" ){ console.log(`"${Month1} has 30 Days"`)}
else if (Month1 == "February" ){ console.log(`${Month1} has 28Days`)}




 //Double == is  wrong in JSO

 //Variable name should be camelCase  