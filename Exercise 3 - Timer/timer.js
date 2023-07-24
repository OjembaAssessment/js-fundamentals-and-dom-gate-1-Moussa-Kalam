const increment = document.querySelector(".btn-incr");
const decrement = document.querySelector(".btn-decr");

const reset = document.querySelector(".btn-reset");
const start = document.querySelector(".btn-start");

let time = document.querySelector(".time");
// let ableBtn = true;

let currentTime = 10;

function incr() {
  currentTime += 1;
  time.textContent = `${currentTime}s`;
}

function decr() {
  if (currentTime > 0) currentTime -= 1;
  time.textContent = `${currentTime}s`;
}

function rst() {
  currentTime = 0;
  time.textContent = `${currentTime}s`;
}

// function disableBtns() {
//   ableBtn = false;
//   increment.removeEventListener("click", incr);
//   decrement.removeEventListener("click", decr);
//   reset.removeEventListener("click", rst);

//   if (currentTime > 0) currentTime -= 1;
//   time.textContent = `${currentTime}s`;
// }

function countDown() {
  start.textContent = "STOP";
  const countingDown = setInterval(decr, 1000);

  if (currentTime === 0) clearInterval(countingDown);
}

increment.addEventListener("click", incr);
decrement.addEventListener("click", decr);
reset.addEventListener("click", rst);
start.addEventListener("click", countDown);
