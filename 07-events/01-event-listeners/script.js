const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  // itemList.innerHTML = "";

  // const items = itemList.querySelectorAll("li");
  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// function onClear() {
//   const itemList = document.querySelector("ul");
//   itemList.innerHTML = "";
// }

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert("Clear Items");
// };

// clearBtn.onclick = function () {
//   console.log("Clear Items");
// };

// addEventListener()
// clearBtn.addEventListener("click", () => alert("Clear Items"));
// clearBtn.addEventListener("click", () => console.log("Clear Items"));

clearBtn.addEventListener("click", onClear);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000); // 2nd arg: ms

// setTimeout(() => clearBtn.click(), 5000);
