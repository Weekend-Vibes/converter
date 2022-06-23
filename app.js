const weight = document.getElementById("weight");
const height = document.getElementById("height");

const calcBtn = document.querySelector(".btn");

const total = document.querySelector(".tip");
const totalword = document.querySelector(".word");
const textAns = document.querySelector(".textC");

function BMI() {
  let metersHeight = Math.pow(height.value * 0.01, 2).toFixed(2);
  let ans = (Number(weight.value) / metersHeight).toFixed(1);
  if (weight.value == "" || height.value == "") {
    alert("enter some value");
    return;
  }

  total.innerHTML = ans;

  if (ans <= 18.4) {
    totalword.innerHTML = "Underweight";
  }
  if (ans > 18.5) {
    totalword.innerHTML = "Normal";
  }
  if (ans > 25) {
    totalword.innerHTML = "Overweight";
  }
  if (ans > 30) {
    totalword.innerHTML = "Obese";
  }

  if (ans > 100) {
    total.innerHTML = 99.9;
  }

  textAns.style.display = "block";
}

calcBtn.addEventListener("click", BMI);
