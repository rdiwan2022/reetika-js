 const firstName = "John";
 const lastName ="wari";
 let country = "India";
 let city= "Delhi" 
 let  age = 64;
 let  isMarried = "NO";
 let year = 2022;

 console.log(typeof(firstname),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(firisMarriedstname),typeof(year));

 2. const a= '10';
    const b= 10;
    console.log(typeof(a)==typeof(b));

    Ans : false

    3. const c= '9.8';
    const d= 10;
    console.log(parseInt(a)===parseInt(d));
VM1036:3 true

    Ans : true

    4. console.log(4>3) ;
    console.log(4>3) ;
    console.log(4>=3) ;
    console.log(4 < 3) ;
    console.log(4 <= 3) ;
    console.log(4 == 4) ;
    console.log(4 === 4) ;
    console.log(4 != 4) ;
    console.log(4 !== 4) ;
    console.log(4 != '4') ;
    console.log(4 == '4') ;
    console.log(4 === '4') ;

    Ans :true
    VM353:2 true
    VM353:3 true
    VM353:4 false
    VM353:5 false
    VM353:6 true
    VM353:7 true
    VM353:8 false
    VM353:9 false
    VM353:10 false
    VM353:11 true
    VM353:12 false

    const e= 'Phython';
    const f = 'Jargon';
    console.log(e.length);
    console.log(f.length);
    console.log('phython'.length === 'jargon'.length)  ;
Ans : false

6. console.log(4 > 3 && 10 < 12) ;
console.log(4 > 3 && 10 > 12) ;
console.log(4 > 3 || 10 < 12) ;
console.log(4 > 3 || 10 > 12) ;
console.log(!(4 > 3)) ;
console.log(!(4 < 3)) ;
console.log(!(false)) ;
console.log(!(4 > 3 && 10 < 12)) ;
console.log(!(4 > 3 && 10 > 12)) ;

Ans :true
VM357:2 false
VM357:3 true
VM357:4 true
VM357:5 false
VM357:6 true
VM357:7 true
VM357:8 false
VM357:9 true

7. 
const now1 = new Date();
console.log(now1.getFullYear());

Ans : 2022

const now1 = new Date();
console.log(now1.getMonth());
11

const now1 = new Date();
console.log(now1.getDate());
Ans:5

const now1 = new Date();
console.log(now1.getDay());
Ans : 1

const now1 = new Date();
console.log(now1.getHours());
Ans: VM623:2 21
undefined
const now1 = new Date();
console.log(now1.getMinutes());
VM646:2 20

let number1 = prompt('Enetr Base', "20");
let number2 = prompt('Enetr Height', "10");
console.log(number1); 
const Area =(number1*number2)/2;
console.log(Area); 

const  now = new Date();
console.log(Date.now);

const  now = new Date();
console.log(now.getTime()/1000);


part 2:

 
2. let q=parseInt(prompt('Sidea', "20"));
 let p=parseInt(prompt('Sideb', "20"));
  let l=parseInt(prompt('Sidec', "20"));
  let Perimiter=q+p+l;
   console.log(n);
  or 
  console.log(`The sum of ${p} and ${l} and ${n} is ${Perimiter}`);

Ans : 60

3. 
let length=parseInt(prompt('length', "20"));
let width=parseInt(prompt('width', "20"));
   let area = length * width* (perimeter = 2 * (length + width)) ;
  console.log(area);
 
 console.log(`The sum of ${length} and ${width}  is ${area}`);

 Ans:32000
 VM2071:6 The sum of 20 and 20  is 32000

 4.
 let radius=parseInt(prompt('radius'));
 let pi=parseInt(prompt('width', "3.14"));
    let area1 = (pi * r *r);
    let circum = (2 * pi * r);
   console.log(area1);
   console.log(circum);
  
  console.log(`The area of circle : ${radius} and ${pi}  is ${area1}`);    
  console.log(`The circum of circle : ${radius} and ${pi}  is ${circum}`);

  The area of circle : 10 and 3  is 1200
VM2117:9 The circum of circle : 10 and 3  is 120

5. 

let x1intercept=parseInt(prompt('Enter value of xintercept'));
let y1intercept=parseInt(prompt('Enter value of xintercept'));
let x2intercept=parseInt(prompt('Enter value of xintercept'));
let y2intercept=parseInt(prompt('Enter value of xintercept'));

 let m = (y2-y1)/(x2-x1).
console.log(m); 

Ans:The slopeofy : 20   is 38
6. 
7.
8.
let x=Number(prompt('Enter value of x'));
let ff = x*x + 6*x + 9;
console.log(ff);
9.  let Hours=parseInt(prompt('Enter user Hours'));
let PayRate=parseInt(prompt('Enter user Payrate'));
let WE = (2*Hours*PayRate);
console.log(`Total weekly earnings are : ${Hours}  and ${PayRate}  is ${WE}`); 

10. let Hours=parseInt(prompt('Enter user Hours'));
let PayRate=parseInt(prompt('Enter user Payrate'));
let WE = (Hours*PayRate);
console.log(`Total weekly earnings are : ${Hours}  and ${PayRate}  is ${WE}`); 
VM2144:4 Total weekly earnings are : 40  and 28  is 1120

11. let firstName = 'Asabeneh';

if(firstName.length>7)
{console.log("long")}
else
{console.log("short");
}
VM2172:4 long

VM2207:6 short


let firstName = 'Asabeneh';
let lName = 'Asab';
if(firstName.length>lName.length)
{console.log('Your first name, ${fName} is longer than your family name, ${lName}');}
else
{console.log("short");
}
let fName = 'Asabeneh';
let lName = 'Yetayeh'
let result = console.log(fName.localeCompare(lName));
if(fName.length= -1)
{console.log('Your first name, ${fName} is longer than your family name, ${lName}');}
else
{console.log("short");
}
VM2386:3 -1
VM2386:5 Your first name, ${fName} is longer than your family name, ${lName}

12.let myAge = 250;
let yourAge = 25;
let difference = (myAge-yourAge);
let diff= console.log(difference);

console.log('I am,  ${difference} years older than you.');
VM2635:4 225

13.





