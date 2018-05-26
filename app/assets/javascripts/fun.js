

function add() {
  let num1 = document.getElementById('num1').value;
  let num2 = document.getElementById('num2').value;
  let output = document.getElementById('calc-out');
  var result = num1 + num2;

  output.textContent = result;

}

function sub() {
  let num1 = document.getElementById('num1');
  let num2 = document.getElementById('num2');
  let output = document.getElementById('calc-out');
  var result = 0;
  if (num1 > num2) {
    result = num1 - num2;
  } else {
    result = num2 - num1;
  }

  output.textContent = result;
}