// Important to be noted - String is immutable(not change) and Array is mutable(changeable) 

// array - collection of the items in a linear way 

let marksOfStudent1 = [12,23,34,21,32]; 
console.log(marksOfStudent1);

marksOfStudent1[1] = 24;
console.log(marksOfStudent1[1]);


// looping over an array - print all element of an array

// for loop 
let users = [14, 23, 13, 25, 11];
for(let i = 0; i<users.length; i++){
    console.log(users[i]);
}


// for-of loop - print all element of an array

let heros = ['ironman', 'spiderman', 'superman', 'hulk', 'loki'];
for(let hero of heros){
    console.log(hero);
}



// practice Question - 1
/* given - marks = [85, 97, 44, 76, 60];
find the average marks of the entire class */


let marks = [85, 97, 44, 76, 60];
let sum = 0;
let numberOfStudent = marks.length;

for(let mark of marks){
    sum += mark;
}
let average = (sum / numberOfStudent);
console.log(average);



// for-of loop

for(val of marks){
   sum = sum + val;
}
sum /= marks.length;
console.log(`avg marks of the class = ${sum}`);



// practice Question - 2
/* given prices of 5 items - [250, 645, 300, 900, 50]
 all items have an offer of 10% on them. change the array to store final price after applying offer*/


let items = [250, 645, 300, 900, 50];

for(let i = 0; i<items.length; i++){
    items[i] = items[i] - (0.1 * items[i]);
    console.log(`after 10% off the price is = ${items[i]}`);
}


// Array methods

// push(): add to end 

let foodItems = ['banana', 'mango', 'apple'];
foodItems.push('grapes', 'pineapple');
console.log(foodItems);

//pop(): delete end & return

let items = ['banana', 'mango', 'apple'];
items.pop(); // delete from the last which is 'apple'.
console.log(items);


//toString(): convert array into string 

let arr = ['bike', 'car', 'plane', 'boat', 'cycle'];
console.log(arr);
console.log(arr.toString());


//concat(): joins multiple arrays & return result

let marvelHeroes = ['ironman', 'spiderman', 'thor'];
let dcHeroes = ['superman', 'batman', 'joker'];
let superHeroes = marvelHeroes.concat(dcHeroes);
console.log(superHeroes);

//unshift(): add to start at 0th index

let names = ['M', 'S', 'R'];
names.unshift('A');
console.log(names);

//shift(): delete from start & return at 0th index

let members = ['ali', 'mehraj', 'sameer', 'adam'];
members.shift();
console.log(members);


/* slice(): return the piece of the array - (original array is not changed)
            slice(startIdx, endIdx) note: endIdx in non-inclusive */

let familyMembers = ['ali', 'mehraj', 'sameer', 'adam'];
familyMembers.slice(1, 2); //endIdx is non-inclusive
console.log(familyMembers);// return only 1th index value 


/* splice(): change original array(add, remove, replace)
    syntax - splice(startIndex, deleteCount(total value you want to remove, it could be 2 or 3 values), new Elements(add new values in replacement of deleted value at that place)) */ 


let num1 = [2, 44, 11, 56, 21, 17];
num1.splice(1, 2, 101, 102); //delete element and replace new ele...
console.log(num1);

let num2 = [2, 44, 11, 56, 21, 17];
num2.splice(1, 0, 111); //add element
console.log(num2);

let num3 = [2, 44, 11, 56, 21, 17];
num3.splice(0, 3); //delete 3 elements
console.log(num3);

let num4 = [2, 44, 11, 56, 21, 17];
num4.splice(2); //all element are deleted after the 2nd index.
console.log(num4);



// practice question - 3

/* create an array to store companies -> 'bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'netflix'.
a. Remove the first company from the Array
b. Remove uber & add ola in its place 
c. add amazon at the end. */

let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'netflix'];

//Remove the first company from the Array.
companies.splice(0, 1);
console.log(companies);

// Remove uber & add ola in its place 
companies.splice(1, 1, 'Ola');
console.log(companies);


// companies.push('Amazon');
companies.splice(5, 0, 'amazon');
console.log(companies);

