const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const deleteKey = document.querySelector(".del-key");
const equal = document.querySelector(".equal-key");
let displayText = "";

const clearScreen = () => {
  display.value = "";
  displayText = "";
};

const evaluateResult = function () {
  let result;
  if (displayText.includes("%")) {
    const operatorIndex = displayText.indexOf("%");
    const num2StartingIndex = operatorIndex + 1;
    const num1 = displayText.slice(0, operatorIndex);
    const num2 = displayText.slice(num2StartingIndex);
    result = (num1 * num2) / 100;
  } else {
    result = eval(displayText);
  }

  display.value = result;
  displayText = result;
};

for (button of buttons) {
  if (button.value !== "=") {
    button.addEventListener("click", (e) => {
      displayText = displayText + e.target.value;
      display.value = displayText;
    });
  }
}

equal.addEventListener("click", evaluateResult);

deleteKey.addEventListener("click", clearScreen);
