// let challenge= "30 Days Of JavaScript";
// console.log(challenge);
// 2. console.log("Hello , I am a String");
// 3. console.log(challenge.length);
// 4. console.log(challenge.toLowerCase();
// 5. console.log(challenge.toLocaleUpperCase();
// 6. let a= " Hello World";
// let result = a.substring(0, 4);


// console.log(result);
// 7. let result1 = a.slice(0, 5);
// console.log(result1);
// 8. let result2 = a.includes("world");
// console.log(result);
// 9. const b= "How are you?";
// const splitresult = text.split("");
// console.log(arrayresult);
// 10.const splitresult = challenge.split(" ");
// console.log(splitresult);
// 11.
// 12. let v1 = "30 Days Of JavaScript";
// let result = text.replace("JavaScript", "Phython");
// 13.let v2 = "30 Days Of JavaScript' string";
// console.log(text.charAt(15));
// 14. let v3 = "30 Days Of JavaScript";
// let code = text.charCodeAt(j);
// console.log(code);
// 15. let v4 = "30 Days Of JavaScript";
// let resultofindex = text.indexOf("a");
// console.log(resultofindex);
// 16. let lastindexresult = text.lastIndexOf("a");
// console.log(lastindexresult);.

17. var str = new String( "You cannot end a sentence with because because because is a conjunction" );
 var index = str.indexOf( "because" , 1 );
console.log(index);

18. let text = "You cannot end a sentence with because because because is a conjunction";
let result = text.lastIndexOf("because");
console.log(result);

19. let text = "You cannot end a sentence with because because because is a conjunction'";
let position = text.search("because");
console.log(position);

Ans :31

20. let text = "      30 Days Of JavaScript  ";
let result = text.trim();
console.log(result);

Ans :  30 Days Of JavaScript 

21. let text = "30 Days Of JavaScript ";
let result = text.startsWith("30");
console.log(result);

Ans : true

22. 
let text = "30 Days Of JavaScript";
let result = text.endsWith("JavaScript");
console.log(result);

Ans : true

23. let text = " 30 Days Of JavaScript";
let result = text.match("a");
console.log(result);

Ans :undefined
Script snippet #1:3 ['a', index: 5, input: ' 30 Days Of JavaScript', groups: undefined]

24. let text1 = "30 Days of' and 'JavaScript' to a single string.";
let text2 = "30 Days Of JavaScript.";
let result = text1.concat(" " , text2);
console.log(result);

Ans : 30 Days of' and 'JavaScript' to a single string. 30 Days Of JavaScript.


//EXCERCISE :2

1. console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
2. 
3. let b = 0;
console.log("String 1 type is :" , typeof(a));
console.log("String 2 type is :" ,typeof(b));
let c = Number(a);
let d = parseInt(a);
let e = +a;
console.log (c , d, e);


4. let a= '9.8';
let b = 10;
let result = a== b;
console.log (result);
console.log(Math.round(a));
Ans : false
Script snippet #1:4 10

5. let String1 = "python";
console.log(String1.includes("on"));
let String2 = "jargon";
console.log(String2.includes("on"));
Ans :true
 true

 6. let String1 = "I hope this course is not full of jargon";
 console.log(String1.includes("jargon"));
 Ans :true

 7. Math.floor(Math.random() * 100;
 Ans :75

 8.  Math.floor(Math.random() * (50) + 50);
 Ans : 97

 9.  Math.floor(Math.random() * (255));

 10 . Mlet d = Math.floor(Math.random() * 9);
 let a = "JavaScript";
console.log(a[d]);

11. console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

 12. let text = "You cannot end a sentence with because because because is a conjunction";
 let result = text.substr(31,23);
console.log (result);

Ans : verify

//Excercise : 3

1. 
2.const str = 'You cannot end a sentence with because because because is a conjunction';

const count = (str.match(/because/g) || []).length;

console.log(count);
Ans :3

3. 

4.
//let text= "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let income1 =text.substr()
let income2 =10000 ;
let income3 =15000 ;

let Totalincome =  income1+income2+income3;


console.log(" Total INcome in Euros=" +Totalincome);

Ans : Total INcome in Euros=30000
 
