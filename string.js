// String 

// let str = 'hello world!';
// console.log(str);


//String length

// let firstName = 'mehraj';
// let lastName = 'rajput';
// let fullName = firstName + lastName;
// console.log("fullName = ", fullName);
// console.log("length of fullName :",fullName.length);



// // template literals 

// // a way to have embedded expressions in strings 
// using backticks - ``
// Eg.
// let str = `this is template literal`;

// console.log(str); 



// string interpolation -  `string text ${expression} string text`

// let product = {
//     productName: 'pen',
//     price: 10,
// }; 
// // string interpolation - to create strings by doing substitution of placeholder ->   `string text ${expression} string text`
// let output = `the cost of ${product.productName} is ${product.price} rupees`;
// console.log(output);



//escape character in string
//(1) \n - next line 
//(2) \t - tab space

// console.log("hello\nworld"); //next line
// console.log("hey\tthere"); //tab space

// let str = 'hello\nthere'; // although '\n' this next line contain 2 char but we length function assume it as 0 1 char. 
// console.log(str.length);



// String Methods - String are Immutable(not changeable) in JS.
//These are built-in functions to manipulate a string.

//1. str.toUpperCase() - upper Case String function

// let str = 'hello!'
// console.log(str);
// let str2 = str.toUpperCase();
// console.log(str2);


// 2. str.toLowerCase() - lower case String

// let str = 'HELLO WORLD';
// console.log(str);
// // let str2 = str.toLowerCase();
// console.log(str.toLowerCase());


//3. str.trim() - its remove white spaces from starting and ending of the string

// let str = '   A  B  C  D  '; 
// console.log(str.trim()); //it remove the spaces before A and after D


//4. Slice Method - str.slice(start, end)//returns part of string 

// let str = '012345';
//console.log(str.slice(0, 4)); /*it slice from 0th index which is 0 till the 4th index which is 4.
//                                but, this function will not return the end value in slice function the ending value is not inclusive. 
//                                it give only before the ending index*/

 

//5. Concatenation string - str.concat() - it is use for add two string.

// let str1 = 'mehraj';
// let str2 = 'rajput';
// let fullName = str1.concat(str2);
// let reverseFullName = str2.concat(str1);
// console.log(fullName);
// console.log(reverseFullName);



//6. replace String - str.replace(replaceVal, newValue) - it will replace the replaceVal with the newValue
                 // - str.replaceAll(replaceVal, newValue) - it will replace the all the same old value with the new value 

// let str = 'hello';
// console.log(str.replace('h', 'y')); //this replace function will replace the 'h' with the newValue which is 'y'.
// console.log(str.replaceAll('l', 'p')); // this function will replace all the same old value with new value 


// 7. str.charAt(indexNo)

// let str = 'hello';
// console.log(str.charAt(2));






//let's practice 
//1.

// let fullName = prompt("enter the full name");

// let username = "@" + fullName + fullName.length;
// console.log(username); 
