let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let display = document.getElementById("display");

let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let kt = 0;

start.addEventListener("click", () => {
    if (kt === 0) {
        kt = setInterval(() => {
            ms += 10;

            if (ms === 1000) {
                s++;
                ms = 0;
            }

            if (s === 60) {
                m++;
                s = 0;
            }

            if (m === 60) {
                h++;
                m = 0;
            }

            display.textContent = String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0") + ":" + String(ms/10).padStart(2, "0");
        }, 10);
    }
});

stop.addEventListener("click", () => {
    clearInterval(kt);
    kt = 0;
});

reset.addEventListener("click", () => {
    clearInterval(kt);
    kt = 0;
    h = m = s = ms = 0;
    display.textContent = "00:00:00:00";
});
