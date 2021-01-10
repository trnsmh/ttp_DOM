// 1) Select the section with an id of container without using querySelector.

let contClassById = document.getElementById("container");
console.log(contClassById);


// 2) Select the section with an id of container using querySelector.

let contClass = document.querySelector("#container");
console.log(contClass);

// 3) Select all of the list items with a class of "second".

let listItems = document.getElementsByClassName("second");
console.log(listItems);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

let thirdOl = document.querySelector("ol .third");
console.log(thirdOl);

// 5) Give the section with an id of container the text "Hello!".

let text  = document.querySelector("#container");
//text.innerText = "Hello!";


// 6) Add the class main to the div with a class of footer.

let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer)

// // 7) Remove the class main on the div with a class of footer.

document.querySelector(".footer");
footer.classList.remove("main");
console.log(footer);

// // 8) Create a new li element.

let newLi = document.createElement("li");


// 9) Give the li the text "four".

newLi.innerText = "four";

// 10) Append the li to the ul element.

let ulListElements = document.querySelector("ul");
ulListElements.appendChild(newLi);

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let ol = document.querySelector("ol");
let olItems = ol.getElementsByTagName("li");
for(let i = 0; i<olItems.length; i++){
    olItems[i].style.backgroundColor = "green";
}

// 13) Remove the div with a class of footer.

let lastDiv = document.getElementsByTagName("div");
lastDiv[1].remove();

