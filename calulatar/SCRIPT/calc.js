function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

function subtraction(num) {
  document.querySelector("#results").value += 
    "-";
}

function multiplication(num) {
  document.querySelector("#results").value += 
    "*";
}

function negativePositive (num) {
  console.log(document.querySelector("#results").value)
  document.querySelector("#results").value *= 
    -1;
}

function division(num) {
  document.querySelector("#results").value += 
    "/";
}

var a=[5, 5, 2, 3, 5, 4, 6, 7, 9, 6, 5]
var i = 5

function remove(a){
  if (i===5);
}
 return (a)


