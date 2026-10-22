let btn = document.getElementById("btn");
let counterVal = document.getElementById("counterVal");
let count = 0;

btn.addEventListener("click", () => {
    count++;
    counterVal.innerHTML = count;
});