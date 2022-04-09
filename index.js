const windowFrame = document.getElementById("window-container");
const toggleButton = document.getElementById("toggle-time");
const audioDaytime = new Audio("./mp3/spatz.mp3");
const audioNighttime = new Audio("./mp3/owl.mp3");

let count = 0;

toggleButton.addEventListener("click", () => {
  count++;
  windowFrame.innerHTML = "";
  let currentWindow = document.createElement("img");
  currentWindow.classList.add("currentWindow");

  if (count % 2 == 0) {
    currentWindow.src = "./img/day.PNG";
    currentWindow.alt = "Window by daytime";
    audioNighttime.pause();
    audioNighttime.currentTime = 0;
    audioDaytime.play();
  } else {
    currentWindow.src = "./img/night.PNG";
    currentWindow.alt = "Window by night time";
    audioDaytime.pause();
    audioDaytime.currentTime = 0;
    audioNighttime.play();
  }
  windowFrame.appendChild(currentWindow);
});
