const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = 11; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn");
const timeValue = document.getElementById("time");
const toast = document.getElementById("toast");
const closeToast = document.getElementById("close-toast");
const message = document.getElementById("message");

startButton.addEventListener("click", (event) => startCountdown());

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  document.getElementById("start-btn").disabled = true;
  // Your code goes here ...
  const startTimer = setInterval(() => {
    timer -= 1;
    timeValue.innerText = timer;
    if (timer === 10) {
      showToast("⏰ Final countdown! ⏰");
    } else if (timer === 0) {
      clearInterval(startTimer);
      showToast("Lift off! 🚀");
    } else if (timer === 5) {
      showToast("⏰ Final countdown! ⏰");
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast(message) {
  toast.innerText = message;
  toast.classList.toggle("show");
  const stopToast = setInterval(() => {
    toast.classList.remove("show");
  }, 3000);
  console.log("showToast called!");

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON
  closeToast.addEventListener("click", () => {
    clearInterval(stopToast);
    toast.classList.remove("show");
  });
  // Your code goes here ...
}

// function showAnyToast(message) {
//   message.classList.toggle("show");
//   const stopToast = setInterval(() => {
//     message.classList.remove("show");
//   }, 3000);
//   console.log("showAnyToast called!");
// }
