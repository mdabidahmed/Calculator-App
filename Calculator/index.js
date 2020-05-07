let button = document.addEventListener("click", event => {
  let input1 = document.getElementById("input1").value;
  input1=parseInt(input1)
  let input2 = document.getElementById("input2").value;
  input2=parseInt(input2)
  if (event.target.value === "+") {
    var res = input1 + input2;
    let final = document.getElementById("result");
    final.textContent = res;
  }
  if (event.target.value === "-") {
    var res = input1 - input2;
    let final = document.getElementById("result");
    final.textContent = res;
  }
  if (event.target.value === "*") {
    var res = input1 * input2;
    let final = document.getElementById("result");
    final.textContent = res;
  }
  if (event.target.value === "/") {
    var res = input1 / input2;
    let final = document.getElementById("result");
    final.textContent = res;
  }
});

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

//function that clear the display
