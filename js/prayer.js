// Malaysia Penang Coordinates
const lat = 5.4141;
const lon = 100.3288;

// GET PRAYER TIME
fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
.then(res => res.json())
.then(data => {

let t = data.data.timings;
let date = data.data.date;

// Gregorian Date
document.getElementById("date").innerText =
date.readable;

// Hijri Date
document.getElementById("hijri").innerText =
date.hijri.day + " " +
date.hijri.month.en +
" " + date.hijri.year + " H";

// Location
document.getElementById("location").innerText =
"Pulau Pinang - Perai";

// Prayer list
let prayers = [
["Imsak", t.Imsak],
["Fajr", t.Fajr],
["Dhuhr", t.Dhuhr],
["Asr", t.Asr],
["Maghrib", t.Maghrib],
["Isha", t.Isha]
];

let now = new Date();

let nextName="";
let nextTime="";

for(let p of prayers){

let timeParts=p[1].split(":");

let prayerTime=new Date();
prayerTime.setHours(timeParts[0]);
prayerTime.setMinutes(timeParts[1]);
prayerTime.setSeconds(0);

if(prayerTime>now){
nextName=p[0];
nextTime=p[1];
break;
}
}

// Show next prayer
document.getElementById("nextPrayer")
.innerText = nextName + ", " + nextTime;


// COUNTDOWN
setInterval(()=>{

let timeParts=nextTime.split(":");

let target=new Date();
target.setHours(timeParts[0]);
target.setMinutes(timeParts[1]);
target.setSeconds(0);

let diff=target-new Date();

let h=Math.floor(diff/3600000);
let m=Math.floor(diff/60000)%60;

document.getElementById("countdown")
.innerText=
nextName+" in "+h+" hour "+m+" minute";

},1000);

})
.catch(err=>{
console.log(err);
alert("Prayer API failed");
});
