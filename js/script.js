let inuptEl = document.querySelector(".input");
let bodyEl = document.querySelector("body");

inuptEl.checked = false;

updateBody();

function updateBody() {
  if (inuptEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "white";
  }
}

inuptEl.addEventListener("input", () => {
  updateBody();
  updateLoclStoage();
});

function updateLoclStoage(params) {
    
    localStorage.setItem("mode",
        JSON.stringify(inuptEl.checked)
    )
}