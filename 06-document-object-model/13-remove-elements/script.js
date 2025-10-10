function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");
  ul.removeChild(li);
}

// 1-indexed
function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1]; // 1-indexed
  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove(); // 1-indexed
}

const removeItem4 = (itemNumber) => document.querySelectorAll("li")[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(2);
// removeItem2(1);
// removeItem3(1);
removeItem4(1);
