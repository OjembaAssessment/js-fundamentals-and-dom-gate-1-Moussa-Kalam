const increment = document.querySelector(".btn-incr");
const decrement = document.querySelector(".btn-decr");

const reset = document.querySelector(".btn-reset");
const start = document.querySelector(".btn-start");

let time = document.querySelector(".time");

let currentTime = 10;

function incr() {
  currentTime += 1;
  time.textContent = `${currentTime}s`;
}

function decr() {
  currentTime -= 1;
  time.textContent = `${currentTime}s`;
}

function rst() {
  currentTime = 0;
  time.textContent = `${currentTime}s`;
}

function countDown() {
  increment.removeEventListener("click", incr);
  decrement.removeEventListener("click", decr);

  if (currentTime > 0) {
    const countingDown = setInterval(decr, 1000);
  } else {
    clearInterval(countingDown);
  }
}

increment.addEventListener("click", incr);
decrement.addEventListener("click", decr);
reset.addEventListener("click", rst);
start.addEventListener("click", countDown);
