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
let target = null;

for (let i = 0; i < prayers.length; i++) {

let time = prayers[i][1].split(":");

let pt = new Date();
pt.setHours(parseInt(time[0]));
pt.setMinutes(parseInt(time[1]));
pt.setSeconds(0);

if (pt > now) {
nextName = prayers[i][0];
nextTime = prayers[i][1];
target = pt;
break;
}

}

/* if after Isha → next prayer is Fajr tomorrow */
if (!target) {

let time = prayers[0][1].split(":");

target = new Date();
target.setDate(target.getDate()+1);
target.setHours(parseInt(time[0]));
target.setMinutes(parseInt(time[1]));
target.setSeconds(0);

nextName = prayers[0][0];
nextTime = prayers[0][1];

}

document.getElementById("nextPrayer").innerText =
nextName + " • " + nextTime;


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
