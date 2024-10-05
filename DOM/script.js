// let header = document.getElementById("myId"); //h1
// console.dir(header);

// let heading = document.getElementsByClassName("myClass");
// console.dir(heading);
// console.log(heading);

// let par = document.getElementsByTagName("p");
// console.dir(par);
// console.log(par);


// let firstElements = document.querySelector("p");
// console.dir(firstElements);


// let allElements = document.querySelectorAll(".myClass");
// console.dir(allElements);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1")


// // practice problem 1

// let heading = document.querySelector("h2");
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from the youtube";
// console.dir(heading)

// // practice problem 2 

// let division = document.querySelectorAll(".box");
// // division[0].innerText = "not first div";
// // division[1].innerText = "that first div";
// // division[2].innerText = "yet first div";

// // console.log(division);

// let idx = 1;
// for(div of division){
//     div.innerText = `new unique value ${idx}`
//     idx++;
// }


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let p = document.querySelector("p");
// let classes = p.getAttribute("class")
// console.log(classes);


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new"));


// let a = document.querySelector("h1");
// console.log(a);

// change HTML 

// let tag = document.querySelector("h1");
// tag.innerHTML = "changed HTML along with CSS";

// changing CSS 
// let tag = document.querySelector("h1");
// tag.innerHTML = "THIS IS THE MATRIX";
// tag.style.color = "yellow";
// tag.style.backgroundColor = "black";

// //event listener 

// let a = document.querySelector("h1");
// a.addEventListener("click", function(){
//     a.innerHTML = "hello there how are you!";
//     a.style.backgroundColor = "pink";
//     a.style.color = "blue";
//     console.log("changed!");

// });

// Bulb ON and OFF project:

// let bulb = document.querySelector("#bulb");
// let btn = document.querySelector("button");

// let flag = 0;

// btn.addEventListener("click", function () {
//     if (flag === 0) {
//         bulb.style.backgroundColor = "yellow";
//         console.log("changed");
//         flag = 1;
//     } else {
//         bulb.style.backgroundColor = "transparent";
//         console.log("again");
//         flag = 0;
//     }
// })

// querySelectorAll 

// let h = document.querySelectorAll("h1");
// console.log(h);

// h.forEach(function(e){
//     console.log(e);

// })

// let h = document.querySelector("h1");
// h.textContent = "byeeeee";



// DOM manipulation for attribute:

// (1) getAttribute("attr")

// let div = document.querySelector("div");
// console.log(div);

// let val = div.getAttribute("id");
// console.log(val);

// let val2 = div.getAttribute("name");
// console.log(val2);

// let newEle = document.querySelector("p");
// console.log(newEle);

// let newVal = newEle.getAttribute("class");
// console.log(newVal);


// DOM manipulation for attribute:
// (2) setAttribute(attr, value)

// let two = document.querySelector("p");
// let newParaValue = two.setAttribute("class", "newClass");
// console.log(newParaValue);



// DOM manipulation for style:

// let newDiv = document.querySelector("div");
// newDiv.style.backgroundColor = "purple";
// newDiv.style.fontSize = "20px";



// DOM manipulation for create/insert a new element:

//create a button and add into the div

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);


//create a heading and add into the body of html

// let NewHeading = document.createElement("h2");
// NewHeading.innerHTML = "<i>This is the new heading which is create in Javascript</i>";
// let newDiv = document.querySelector("body");
// newDiv.prepend(NewHeading);



// DOM manipulation - delete Element 

// let para = document.querySelector("p");
// para.remove();



// Let's practice the questions  

// Question - 1 

/* 
Create a new button element. give it a text "click me", background color of red & text color of white.
insert the button as the first element inside the body tag
*/

// // code:

// //create a button 
// let newButton = document.createElement("button");

// //button text
// newButton.innerText = "click me";

// //styling the button
// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";

// //insert the button
// //access the body tag
// document.querySelector("body").prepend(newButton);



// Question - 2

/* 
Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.

did you notice, how you overwrite the class name when you add a new one?
solve this problem using classList
*/

// let para = document.querySelector("p");

// para.classList.add("newClass");


// -------------------------------------

// // appendChild() 

// // create a new element 
// const newEl = document.createElement("p");
// newEl.innerText = "this is the new appendChild paragraph";

// // append the new element as a child into the parent element  
// const preEl = document.getElementById("myNode");
// preEl.appendChild(newEl);



// // removeChild()

// // select the parent element 
// const temp = document.getElementById("myNode2");

// // select the parent child element 
// const temp2 = document.getElementById("new1");

// // remove child element 
// temp.removeChild(temp2);



// // classList 

// // access Element
// const contents1 = document.querySelector("h1");

// //add a class
// contents1.classList.add("newContent");

// // remove a class
// contents1.classList.remove("newContent");


// // Event Handling 

// const btn1 = document.getElementById("btn1");

// btn1.onclick = () => { //click event
//     console.log("btn1 was clicked");
//     let a = 25;
//     let b = 24;
//     a++;
//     console.log(a + b);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => { //mouse hovering event 
//     console.log("you are inside div"); 
// }


// // Event Object

// const btn1 = document.getElementById("btn1");

// btn1.onclick = (e) => {
//     console.log("clicked");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = (event) => {
//     console.log("hovered on the box");  
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX, event.clientY)

// }


// // Event Listeners 

// const btn1 = document.querySelector("#btn1");

// // addEventListener 
// btn1.addEventListener("click",  (event) => {
//     console.log("button was clicked - handler1");
// })

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler2");  
// })

// const handler3 = () => {
//     console.log("button was clicked - handler3");  
// }
// btn1.addEventListener("click",handler3)

// btn1.addEventListener("click", () => {
//     console.log("button was clicked - handler4");  
// })

// // removeEventListener
// btn1.removeEventListener("click", handler3);


// let's practice 

/* 
   Question : Create a toggle that changes the screen to dark-mode when clicked & light-mode when clicked again.
*/

// Code 
let modeBtn = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";
let text = document.createElement("h1");
text.innerText = "mode is change";
modeBtn.after(text);

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("white");

    } else {
         currMode = "light";
        body.classList.add("white");
        body.classList.remove("black");

    }
    console.log(currMode);
});



