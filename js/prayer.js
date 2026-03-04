const lat = 5.4141;
const lon = 100.3288;

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
.then(res => res.json())
.then(data => {

let t = data.data.timings;

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
let target;

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

document.getElementById("nextPrayer").innerText =
nextName + " • " + nextTime;


/* COUNTDOWN + PROGRESS */

setInterval(() => {

let diff = target - new Date();

let h = Math.floor(diff / 3600000);
let m = Math.floor(diff / 60000) % 60;
let s = Math.floor(diff / 1000) % 60;

document.getElementById("countdown").innerText =
h + "h " + m + "m " + s + "s remaining";

/* progress bar */

let total = 6 * 60 * 60 * 1000;
let progress = 100 - (diff / total * 100);

document.getElementById("progressBar").style.width =
progress + "%";

}, 1000);

});
