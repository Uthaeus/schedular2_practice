$(document).ready(function() {

  let adds = document.getElementById('add');
  let subs = document.getElementById('sub');
  let mults = document.getElementById('mult');
  let divs = document.getElementById('div');

  adds.addEventListener('click', add);
  subs.addEventListener('click', sub);
  mults.addEventListener('click', mult);
  divs.addEventListener('click', div);

  function add() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let output = document.querySelector('#calc-out');

    let result = +num1 + +num2;
    output.textContent = result;
  }

  function sub() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let output = document.querySelector('#calc-out');
    let result = +num1 - +num2;

    output.textContent = result;
  }

  function mult() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let output = document.querySelector('#calc-out');
    let result = +num1 * +num2;

    output.textContent = result;
  }

  function div() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    let output = document.querySelector('#calc-out');
    let result = +num1 / +num2;

    output.textContent = result;
  }

});

