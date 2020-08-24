const start = document.querySelector(".start"),
  restart = document.querySelector(".restart"),
  input = document.querySelector(".input"),
  msg = document.querySelector(".message"),
  numArea = document.querySelector(".num-area");
let count = 1,
  bingo = Math.round(Math.random() * 100);
console.log(bingo);

start.addEventListener("click", function () {
  let round = +input.value;

  console.log(count);
  if (round === bingo) {
    msg.classList.add("message_win");
    numArea.classList.add("num-area_win");
    numArea.textContent = bingo;

    msg.textContent = "You found the number by " + count + " times!!!";
  } else if (round > bingo) {
    msg.textContent = "Too high";
    count += 1;
  } else if (round < bingo) {
    msg.textContent = "Too low";
    count += 1;
  }
});

restart.addEventListener("click", () => {
  input.value = "";
  msg.classList.remove("message_win");
  msg.textContent = 'Insert a number from "1" to "100"';
  numArea.classList.remove("num-area_win");
  numArea.textContent = "?";
  bingo = Math.round(Math.random() * 100);
  console.log(bingo);
  count = 1;
});
