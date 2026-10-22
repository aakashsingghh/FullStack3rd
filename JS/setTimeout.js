
let time;
let id;

function start() {
    if (id) return;

    let val = document.getElementById("val1").value;
    let val2 = document.getElementById("val2").value;
    time = parseInt(val) * 60 + parseInt(val2);
    id = setInterval(function() {
        if (time <= 0) {
            clearInterval(id);
            id = null;
            alert("Time's up!");
            return;
        }

        time--;

        document.getElementById("timer").innerHTML =
            Math.floor(time / 60) + ":" +
            String(time % 60).padStart(2, "0");
    }, 1000);
}

let snoozeBtn = document.getElementById("snooze");
snoozeBtn.addEventListener("click", snooze);

function snooze(){
    time += 5 * 60;
}