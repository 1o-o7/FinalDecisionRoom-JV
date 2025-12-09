let seconds = 10;
let timerInterval;
let click = 0;

function startTimer() {
  alert("It's not over. Choose your fate.");
  document.getElementById("modal").style.display = "none";
  document.getElementById("intense").currentTime = 0;
  document.getElementById("intense").play();
  seconds = 10; // 20 seconds
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    seconds--;

    let remainingSeconds = seconds % 60;
    let displaySeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    document.getElementById(
      "timerText"
    ).textContent = `Time Left: ${displaySeconds}`;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      document.getElementById("intense").pause();
      document.getElementById("scare").play();
      document.getElementById("scare").volume = 1.0;
      document.getElementById("timerText").textContent = "";
      document.getElementById("text").textContent = "";
      document.getElementById("one").classList.add("none");
      document.getElementById("two").classList.add("none");
      document.getElementById("three").classList.add("none");
      document.getElementById("jumpscare").style.display = "block";
      document.getElementById("jumpscare").classList.add("shake");

      // Call gameOver after 2 seconds
      setTimeout(() => {
        gameOver();
      }, 2000);
    }

    if (click == 1) {
      document.getElementById("timerText").textContent = "";
      document.getElementById("intense").pause();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function saveEric() {
  click++;
  document.getElementById("text").textContent = "";
  document.getElementById("scare").play();
  document.getElementById("scare").volume = 1.0;
  document.getElementById("jumpscare").classList.add("shake");
  document.getElementById("jumpscare").style.display = "block";
  document.getElementById("one").classList.add("none");
  document.getElementById("two").classList.add("none");
  document.getElementById("three").classList.add("none");
  setTimeout(() => {
    playerCaptured();
  }, 2000);
}

function saveSelf() {
  click++;
  //you get freedom
  document.getElementById("escaped").play();
  document.getElementById("escape").style.display = "block";
  document.getElementById("one").classList.add("none");
  document.getElementById("two").classList.add("none");
  document.getElementById("three").classList.add("none");
  text.textContent = "You Escaped!  Alone...";
}

function playerCaptured() {
  document.querySelector(".jumpscare").style.display = "none";
  text.textContent = "It was a trap... Art has captured you";
}

function gameOver() {
  document.querySelector(".jumpscare").style.display = "none";
  text.textContent = "It's too late... Art has captured you";
}
