const windowFrame = document.getElementById("window-container");
const toggleButton = document.getElementById("toggle-time");
let count = 0;

toggleButton.addEventListener("click", () => {
  count++;
  windowFrame.innerHTML = "";
  let currentWindow = document.createElement("img");
  currentWindow.classList.add("currentWindow");

  if (count % 2 == 0) {
    currentWindow.src = "./img/day.PNG";
    currentWindow.alt = "Window by daytime";
  } else {
    currentWindow.src = "./img/night.PNG";
    currentWindow.alt = "Window by night time";
  }

  windowFrame.appendChild(currentWindow);
});
