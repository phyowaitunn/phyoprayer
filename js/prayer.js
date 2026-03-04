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





