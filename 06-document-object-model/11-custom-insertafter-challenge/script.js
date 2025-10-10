function insertAfter(newElement, existingElement) {
  existingElement.parentElement.insertBefore(newElement, existingElement.nextSibling);
}

const li = document.createElement("li");
li.textContent = "Insert Me After!";

const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);
