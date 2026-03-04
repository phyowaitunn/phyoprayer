const lat = 5.4141;
const lon = 100.3288;

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
.then(res => res.json())
.then(data => {

let t = data.data.timings;

/* fill prayer times */

document.getElementById("fajr").innerText = t.Fajr;
document.getElementById("dhuhr").innerText = t.Dhuhr;
document.getElementById("asr").innerText = t.Asr;
document.getElementById("maghrib").innerText = t.Maghrib;
document.getElementById("isha").innerText = t.Isha;


/* detect next prayer */

let prayers = [
["Fajr", t.Fajr],
["Dhuhr", t.Dhuhr],
["Asr", t.Asr],
["Maghrib", t.Maghrib],
["Isha", t.Isha]
];

let now = new Date();
let nextName = "";
let nextTime = "";
let target = null;

for (let p of prayers) {

let time = p[1].split(":");

let pt = new Date();
pt.setHours(time[0]);
pt.setMinutes(time[1]);
pt.setSeconds(0);

if (pt > now) {
nextName = p[0];
nextTime = p[1];
target = pt;
break;
}

}

/* highlight row */

document.querySelectorAll(".prayer-row")
.forEach(r => r.classList.remove("active"));

let row = document.getElementById("row-" + nextName.toLowerCase());

if(row){
row.classList.add("active");
}

});




// remove old highlight
document.querySelectorAll(".prayer-row")
.forEach(r => r.classList.remove("active"));

// add highlight
let highlight = document.getElementById(
"row-" + nextName.toLowerCase()
);

if(highlight){
highlight.classList.add("active");
}

/* COUNTDOWN */

function updateCountdown(){

let now = new Date();
let diff = target - now;

let h = Math.floor(diff / 3600000);
let m = Math.floor((diff % 3600000) / 60000);
let s = Math.floor((diff % 60000) / 1000);

document.getElementById("countdown").innerText =
h + "h " + m + "m " + s + "s remaining";

}

updateCountdown();
setInterval(updateCountdown,1000);

});


/* highlight next prayer */
let id = "row-" + nextName.toLowerCase();
let row = document.getElementById(id);
if(row){
row.classList.add("active");
}
