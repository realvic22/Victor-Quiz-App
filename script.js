document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.querySelector(".start_btn button");
  const infoBox = document.querySelector(".info_box");
  const quitBtn = infoBox.querySelector(".quit");
  const restartBtn = infoBox.querySelector(".restart");

  // Show the info box when the Start Quiz button is clicked
  startBtn.onclick = () => {
    infoBox.style.opacity = "1";
    infoBox.style.pointerEvents = "auto";
    infoBox.style.transform = "translate(-50%, -50%) scale(1)";
  };

  // Hide the info box when the Quit button is clicked
  quitBtn.onclick = () => {
    infoBox.style.opacity = "0";
    infoBox.style.pointerEvents = "none";
    infoBox.style.transform = "translate(-50%, -50%) scale(0.9)";
  };

  // Proceed with the quiz when the Continue button is clicked
  restartBtn.onclick = () => {
    // Here you can add the functionality to start the quiz
    alert("Quiz Started!");
    infoBox.style.opacity = "0";
    infoBox.style.pointerEvents = "none";
    infoBox.style.transform = "translate(-50%, -50%) scale(0.9)";
  };
});
