const a = ['Sam', 'Sahil','Sami']
console.log(a);
// Always declare aaray as const bz we do not change values directly.

const blank = [];
console.log(blank);

const numberaaray =[1, 5,7,7,6];
console.log(numberaaray);

const ClassGradefirstobject = { 
    name: "Vishal",
    Age: 25,
    Address: "777 sahi Road" 
    
}

const countryobject ={
    countryname: "India",
    Population: 5577555,
    Primeminister: "Modi"

}

const arraycountryobject = [
    {
        countryname: "India",
        Population: 5577555,
        Primeminister: "Modi"
    
    },
    {
        countryname: "Canada",
        Population: 5577555,
        Primeminister: "Modiee"
    
    },
    {
        countryname: "USA",
        Population: 558687678,
        Primeminister: "Obama"
    
    }

] 
console.log(arraycountryobject[2].Population);
console.log(arraycountryobject[1].Primeminister);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let convertstringtoarray = companiesString.split(', ');
console.log(convertstringtoarray);
console.log(convertstringtoarray[3]);
const length = (convertstringtoarray.length);//7
const index= (parseInt(length/2));//3// parseInt change float value and string to number
console.log(convertstringtoarray[index]);//  Apple // middle element of an array
console.log(convertstringtoarray[0]);// First element of an array
console.log(convertstringtoarray[length-1]);// last element from an array

//Add value in array
convertstringtoarray.push("TCS");
console.log(convertstringtoarray);

// If we have to add starting of the array then use 'unshift'

// to delete the value use "Pop"
convertstringtoarray.pop();
console.log(convertstringtoarray);

// if i have delete the value from starting from the array then use shift
//push and pop based on Stack => Last In First Out
//Unshist and shift based on Queue=> First In First Out












