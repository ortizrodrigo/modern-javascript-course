jokeDiv = document.querySelector("#joke");
jokeBtn = document.querySelector("#joke-btn");

function generateRandomJoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        jokeDiv.innerText = data.value;
      } else {
        jokeDiv.innerText = "something went wrong :(";
      }
    }
  };
  xhr.send();
}

jokeBtn.addEventListener("click", generateRandomJoke);
document.addEventListener("DOMContentLoaded", generateRandomJoke);
