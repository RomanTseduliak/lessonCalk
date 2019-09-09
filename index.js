const nums = document.querySelectorAll(".calc .nums button");
const opers = document.querySelectorAll(".calc .opers button");
const display = document.querySelector(".calc .display");
const equal = document.querySelector(".calc .eq");
//const clear = document.querySelector(".clear");
nums.forEach(buttonNum => buttonNum.addEventListener("click", numPressed));
function numPressed(ev) {
  const num = ev.target.innerText;
  display.value += num;
}
opers.forEach(buttonOper => buttonOper.addEventListener("click", operPressed));
function operPressed(ev) {
  const oper = ev.target.innerText;
  display.value += oper;
}
equal.addEventListener("click", () => (display.value = eval(display.value)));

function clearPressed(ev) {
  const clear = ev.target.innerText;
  display.value += clear;
}
clear.addEventListener = () => (display.value = "");
