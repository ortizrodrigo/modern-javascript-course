const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

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

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value.trim();

  // Validate Input
  if (newItem === "") {
    alert("Please add an item");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  // Add li to the DOM
  itemList.appendChild(li);

  checkUI();

  itemInput.value = "";
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    const icon = e.target;
    const button = icon.parentElement;
    const item = button.parentElement;
    const itemText = item.textContent;
    if (confirm(`Are you sure you want to DELETE ${itemText}?`)) {
      item.remove();
      checkUI();
    }
  }
}

function clearItems(e) {
  if (!confirm("Are you sure you want to CLEAR all items?")) {
    return;
  }

  while (itemList.firstElementChild) {
    itemList.removeChild(itemList.firstElementChild);
  }

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

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);

// Display/Hide Filter+Clear based on list empty
checkUI();
