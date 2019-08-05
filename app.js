const loadingBarEl = document.querySelector(".loading-bar__item");
const loadButtonEls = document.getElementsByClassName("buttons");

let width = 1;

let loadingBar = setInterval(function() {
  if (width >= 100) {
    clearInterval(loadingBar);
  } else {
    width++;
    loadingBarEl.style.width = width + "%";
  }
}, 20);

function loadButtons() {
  for (let button of loadButtonEls) {
    button.addEventListener("click", function(event) {
      console.log(loadingBarEl.style.width);

      let valueToLoad = event.target.innerText.slice(0, -1);

      let loadingBar = setInterval(function() {
        if (width >= valueToLoad) {
          clearInterval(loadingBar);
        } else {
          width++;
          loadingBarEl.style.width = width + "%";
        }
      }, 20);
      width = 1; //reset width to allow button hits to load a fresh bar once again
    });
  }
}

loadButtons();
