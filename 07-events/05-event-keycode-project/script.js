function onKeyDown(e) {
  const pKey = document.getElementById("key");
  const pKeyCode = document.getElementById("keyCode");
  const pCode = document.getElementById("code");

  pKey.textContent = e.key === " " ? "Space" : e.key;
  pKeyCode.textContent = e.keyCode;
  pCode.textContent = e.code;
}

window.addEventListener("keydown", onKeyDown);
