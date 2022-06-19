
const calcBtn = document.getElementById("calc")
const calcBtn2 = document.getElementById("calc2")
const calcBtn3 = document.getElementById("calc3")

calcBtn.addEventListener("click", function (e) {
    const ans = document.getElementById("result");
    const percent = document.getElementById("percent");
    const total = document.getElementById("total");
    e.preventDefault();
    let percentVal = percent.value;
    let totalVal = total.value;
    let result = (percentVal / 100) * totalVal;
    console.log(result);
    ans.innerHTML = result;
})

calcBtn2.addEventListener("click", function (e) {
    e.preventDefault();
    const ans2 = document.getElementById("result2");
    const percent = document.getElementById("percent2");
    const total = document.getElementById("total2");
    let percentVal = percent.value;
    let totalVal = total.value;
    let result = (percentVal / totalVal) * 100;
    console.log(result.toFixed(2));
    ans2.innerHTML = `${result.toFixed(2)}%`;
})

calcBtn3.addEventListener("click", function (e) {
    e.preventDefault();
    const ans3 = document.getElementById("result3");
    const percent = document.getElementById("percent3");
    const total = document.getElementById("total3");
    let percentVal = percent.value;
    let totalVal = total.value;
    let result = ((totalVal - percentVal) / percentVal) * 100

    ans3.innerHTML = `${result.toFixed(2)}%`;


})