let output;
const parent = document.querySelector(".parent");

output = parent.childNodes; // newline whitespace considered a node
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent; // Child 1
output = parent.childNodes[3].outerHTML; // <div class="child">Child 1</div>

parent.childNodes[3].innerHTML = "Child One";
parent.childNodes[5].style.color = "red";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Hello";

// Parent node
const child = document.querySelector(".child");
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Siblings
const secondItem = document.querySelector(".child:nth-child(2)");

output = secondItem.nextSibling; // whitespace (instead use nextElementSibling)
output = secondItem.previousSibling; // whitespace (instead use nextElementSibling)

console.log(output);
