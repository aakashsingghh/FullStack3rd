let time = 900;
function start(){
    let id = setInterval(function() {
        time--;
        document.getElementById("timer").innerHTML =
            Math.floor(time / 60) + ":" + String(time % 60).padStart(2, "0");
        if (time == 0) {
            clearInterval(id);
        }

    }, 1000);

    setTimeout(() => alert("Time's up!"), 900000);
}