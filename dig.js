let myHour = document.querySelector("#hrs"),
    myMinute = document.querySelector("#mins"),
    mySecond = document.querySelector("#sec"),
    identifier = document.querySelector(".identifier"),
    p = "am";


setInterval(() => {
    updateTime();
}, 1000);
function updateTime() {

    let Hr = new Date().getHours(),
        M = new Date().getMinutes(),
        S = new Date().getSeconds();

    if (Hr > 12) {
        Hr = Hr - 12;
        p = "pm";
    }
    else {
        p = "am";
    }

    {
        (Hr < 10) ? Hr = "0" + Hr : Hr;
        (M < 10) ? M = "0" + M : M;
        (S < 10) ? S = "0" + S : S;
    }
    myHour.innerHTML = Hr;
    myMinute.innerHTML = M;
    mySecond.innerHTML = S;
    identifier.innerHTML = p;
}

updateTime()
