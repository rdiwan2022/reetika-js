// ques :1 
// const arr = [];
// console.log(arr);

// ques:2
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers) // -> [1,2,3,4,5,6]

// ques:3
// const numbers1 = [1, 2, 3, 4, 5]
// numbers.push(6)console.log(numbers1.length)

// ques:4
// const numbers2= [1, 2, 3, 4, 5]
// console.log(numbers2[0])
// console.log(numbers2[length/2])
// console.log(numbers2[length-1])
// const numbers2= [1, 2, 3, 4, 5]
// console.log(numbers2[parseInt(numbers2.length/2)])
// console.log(numbers2[parseInt(numbers2.length-1)])

// ques:5
// const mixedDataTypes= [1, 'FIrst', 3, "Second", 5,6,8,4]
// console.log(mixedDataTypes[0])
// console.log(mixedDataTypes[1])
// console.log(mixedDataTypes[4]) //->  1, FIrst, 5
// console.log(mixedDataTypes.length);

// ques:6
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

// ques:7
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log(itCompanies) // (7) ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// ques:8
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log("Number of Companies", itCompanies.length) //Number of Companies 7

// ques:9
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log("NFirst Company", itCompanies[0])
// console.log("NMIddle Company", itCompanies[3])
// console.log("Nlast Company", itCompanies[6]) //--> NFirst Company Facebook, VM1134:3 NFirst Company Apple,VM1134:4 NFirst Company Amazon

// que:10
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log("Companies", itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5],itCompanies[6])

// que:11
// const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log(itCompanies[0].toUpperCase(),itCompanies[1].toUpperCase(),itCompanies[2].toUpperCase(),
// itCompanies[3].toUpperCase(),itCompanies[4].toUpperCase(),itCompanies[5].toUpperCase(),itCompanies[6].toUpperCase()) //->FACEBOOK GOOGLE MICROSOFT APPLE IBM ORACLE AMAZON

// que:12
// const itCompanies1 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// console.log(itCompanies1, "are big IT companies");

// ques: 13
// const itCompanies1 =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// if(itCompanies1.includes('Google'))
// {  console.log("Company Found");}
// else
// {   console.log("Company not found");}  //VM158:4 Company Found

// ques:14


// ques:15
// const itCompaniessort =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// console.log(itCompaniessort.sort());// ask vishal

// ques:16
// const itCompaniessort =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// console.log(itCompaniessort.reverse());// ask vishal

// ques:17
// const itCompaniesslice =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
// console.log(itCompaniesslice.slice(3)); //(4) ['Apple', 'IBM', 'Oracle', 'Amazon']

// que 18
// const itCompaniesslice =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
// console.log(itCompaniesslice.slice(0,4)); // (4) ['Facebook', 'Google', 'Microsoft', 'Apple']

// que 19:
// const itCompaniesslicemiddle=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
// console.log(itCompaniesslice.slice();
// VM322:2 (4) ['Facebook', 'Google', 'Microsoft', 'Apple']




// Level 2 :

// // ques:2

// let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// var punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// console.log(punctuationless);
// console.log(punctuationless.length);
// let a= punctuationless.split(' ');
// console.log(a);

// que:3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
// console.log(shoppingCart);
// (ii)

const newlength=shoppingCart.push("Sugar");
console.log(newlength);
console.log(shoppingCart);

// (iii)
var removed = shoppingCart.splice(4,1);
console.log(removed);
console.log(shoppingCart);

// (iv)
// const shoppingCart4 = ['Milk', 'Coffee', 'Tea', 'Honey', 'Tea'];
let b= shoppingCart.indexOf("Tea");
shoppingCart[b] = "GreenTea";
console.log(shoppingCart);



  

// ques:4
const Countries= ['Australia', 'Ethiopia', 'India', 'Canada']
if(Countries.includes("Ethiopia"))
{
    console.log("ETHIOPIA");
}
else
{
    
    Countries.push("Ethiopia");
    console.log(Countries); 
}

// ques: 5
const webtech= ['Milk', 'Sass', 'Tea', 'Honey']
if(webtech.includes('Sass'))
{
    console.log("Sass is a CSS preprocess");
}
else
{
    
    webtech.unshift("Sass");
    console.log(webtech); 
}


// que:6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Excercise:3

// 1. 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,3];
console.log(ages.sort((a, b) => a - b));
let a = Math.min(...ages);
let max = Math.max(...ages);
console.log(a);
console.log(max);

// 2. 
const agesm = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortdata= agesm.sort((a, b) => a - b);
let element = sortdata.length;
if (element%2===0)
{
    let median1 =sortdata.length/2;//5
    let median2= sortdata.length/2-1;//
    
    let median = (median1+median2)/2;
}

3. const countries = ["India", "Australia", "Africa", "Canada"]














































