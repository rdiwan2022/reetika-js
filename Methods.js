// Modification
const numberarray = [1,6,9,3,54,75];
numberarray[2] =19;


//Create blank array
const blankarray= Array(7);
console.log(blankarray);
blankarray.fill(79, 2,4);

const numberarray = [1,6,9,3,54,75,1];
console.log(numberarray.indexOf(54));
console.log(numberarray.lastIndexOf(1));
numberarray.includes(9);

// JOIN join the srring by providing seperator  . without seperator it will join by comma
const numberarray1 = [1,6,9,3,54,75,1];
console.log(numberarray1.join(":"));

// Slice: copy original array not modify
const numberarray = [1,6,9,3,54,75,1];
numberarray.slice(3,5);
console.log(numberarray);

// Splice : modifiying original array
const numberarray = [1,6,9,3,54,75,1];
numberarray.splice(1,2);//[1, 3, 54, 75, 1] // deleted 2 elements 6 and 9 
console.log(numberarray);

// Sort
// Does not work in number
const numberarray = [1,6,9,3,54,75,1];
console.log(numberarray.sort()); //  Does not work in number
console.log(numberarray.sort((a, b) => a - b)); // work in number in ascending order
console.log(numberarray.sort((a, b) => b - a));// works in descending order

const numberarray = ["India", "Africa", "Zebra"];
console.log(numberarray.sort().reverse()); /// Reverse 

// Filter : 
const numberarray = [1,6,9,3,54,75,1,865,654,876,44,73];
numberarray.filter(
    even
)


 function even(a)
{
if (a%2===0)
{
    return true;
}
}
even(a);


//Map: // Midify the whole array
const numberarray = [1,6,9,3,54,75,1,865,654,876,44,73];
numberarray.map(
    flusfive
)


function flusfive(a)
{
const b= a+5;
return b;
}

// Reduce
const numberarray = [1,6,9,3,54,75,1,865,654,876,44,73];
numberarray.reduce(  sum ,0 )

function sum(a,b)
{
     const c=a+b;
     return c;
}

sum(5,6);











































