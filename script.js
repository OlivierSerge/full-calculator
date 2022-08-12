const buttons = document.getElementsByClassName("btn");
let input = document.getElementById("input");
let isNew = true;

for (let b = 0; b < buttons.length; b++) {
  buttons[b].addEventListener("click", () => {
    console.log("you just clicked===>", buttons[b].innerText, "button");
    if (buttons[b].innerHTML === "DEL") {
      const newValue = input.innerText;
      input.innerText = newValue.slice(0, newValue.length - 1);
    } else if (buttons[b].innerText === "=") {
      const value = eval(input.innerText);
      isNew = true;
      input.innerText = value;
    } else if (buttons[b].innerText === "RESET") {
      isNew = true;
      input.textContent = "";
    } else if (buttons[b].innerText === "X") {
      input.textContent += "*";
    } else if (buttons[b].innerText) {
      if (isNew) {
        input.textContent = buttons[b].innerText;
        isNew = false;
      } else {
        input.textContent += buttons[b].innerText;
      }
    }
  });
}

input.textContent = "0";
input.style.padding = "25";
input.style.fontWeight = "bolder";
input.style.fontSize = "larger";
//input.addEventListener("change", (e) => {
//  input = e.target.value;
console.log(input);

function operators(x, y) {
  let operators = x + y;
  return operators;
  if (operators === x + y) {
    return operators;
    console.log("the sum is equal to", operators);
  } else if (operators === x - y) {
    return operators;
    console.log("The substraction value is equal to", operators);
  } else if (operators === x / y) {
    return operators;
    console.log("The division result is equal to", operators);
  } else {
    return operators;
    console.log("The product is equal to", operators);
  }
}
const operatorsBtns = document.getElementsByClassName("btn");
//operatorsBtns.addEventListener("click", () => {});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", () => {});
const deleteBtn = document.getElementById("deleteBtn");
resetBtn.addEventListener("click", () => {
  // deleteBtn = buttons[b].removeInnerText;
});

console.log(deleteBtn);
// const firstThemeBtn = document.getElementById();
// firstThemeBtn.addEventListener("click", () => {});
// const secondThemeBtn = document.getElementById();
// secondThemeBtn.addEventListener("click", () => {});
// const thirdThemeBtn = document.getElementById();
// thirdThemeBtn.addEventListener("click", () => {});
function addition(buttons) {
  const sum = buttons[b] + buttons[b];
  return sum;
}
