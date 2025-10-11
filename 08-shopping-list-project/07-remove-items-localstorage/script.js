const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value.trim();
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  addItemToDOM(newItem);
  addItemToStorage(newItem);
  checkUI();
  itemInput.value = "";
}

function addItemToDOM(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  const itemsJsonString = localStorage.getItem("items") ?? "[]";
  const itemsFromStorage = JSON.parse(itemsJsonString);
  return itemsFromStorage;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    const icon = e.target;
    const button = icon.parentElement;
    const item = button.parentElement;
    removeItem(item);
  }
}

function removeItem(item) {
  const itemText = item.textContent;
  if (confirm(`Are you sure you want to DELETE ${itemText}?`)) {
    item.remove();
    removeItemFromStorage(itemText);
    checkUI();
  }
}

function removeItemFromStorage(itemText) {
  let itemsFromStorage = getItemsFromStorage();
  itemsFromStorage = itemsFromStorage.filter((item) => item !== itemText);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

function clearItems(e) {
  if (!confirm("Are you sure you want to CLEAR all items?")) {
    return;
  }

  while (itemList.firstElementChild) {
    itemList.removeChild(itemList.firstElementChild);
  }

  localStorage.removeItem("items");

  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll("li");
  const filterText = e.target.value.trim().toLowerCase();

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();
    const isMatch = itemName.indexOf(filterText) != -1;
    item.style.display = isMatch ? "flex" : "none";
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  const isItemsEmpty = items.length === 0;
  clearBtn.style.display = isItemsEmpty ? "none" : "block";
  itemFilter.style.display = isItemsEmpty ? "none" : "block";
}

function init() {
  // Event Listeners
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemFilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  // Display/Hide Filter+Clear based on list empty
  checkUI();
}

// Initialize app
init();
