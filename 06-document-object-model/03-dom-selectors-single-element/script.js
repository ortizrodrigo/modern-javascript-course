// document.getElementById()

console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

// Set attributes
document.getElementById("app-title").title = "Shopping List"; // hover over element

document.getElementById("app-title").setAttribute("class", "title");

const title = document.getElementById("app-title");

// Get/change content
console.log(title.textContent);
title.textContent = "Hello World";
title.innerText = "Hello Again";
title.innerHTML = "<strong>Shopping List</strong>";

// Change styles
title.style.color = "red";
title.style.backgroundColor = "black";
title.style.padding = "10px";
title.style.borderRadius = "10px";

// document.querySelector()
console.log(document.querySelector("h1")); // by tag
console.log(document.querySelector("#app-title")); // by id
console.log(document.querySelector(".container")); // by class
console.log(document.querySelector("input[type=text]")); // by attributes
console.log(document.querySelector("li:nth-child(2)").innerText); // by pseudo-selector

const secondItem = document.querySelector("li:nth-child(2)");

secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

// Use these methods on other elements
const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
