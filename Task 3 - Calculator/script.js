const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equal');

let input = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      input += value;
      display.innerText = input;
    }
  });
});

equalBtn.addEventListener('click', () => {
  try {
    let result = eval(input);
    display.innerText = result;
    input = result.toString();
  } catch {
    display.innerText = "Error";
    input = "";
  }
});

clearBtn.addEventListener('click', () => {
  input = "";
  display.innerText = "0";
});
