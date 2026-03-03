const lat = 5.4141;
const lon = 100.3288;

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
.then(res=>res.json())
.then(data=>{

let t=data.data.timings;
let d=data.data.date;

document.getElementById("date").innerText =
d.readable;

document.getElementById("location").innerText =
"Pulau Pinang, Malaysia";

fajr.innerText=t.Fajr;
sunrise.innerText=t.Sunrise;
dhuhr.innerText=t.Dhuhr;
asr.innerText=t.Asr;
maghrib.innerText=t.Maghrib;
isha.innerText=t.Isha;

});
