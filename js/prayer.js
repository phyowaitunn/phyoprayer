// Malaysia Zone Example (Penang)
const zone = "PNG01";

fetch(`https://api.waktusolat.app/v2/solat/${zone}`)
.then(res => res.json())
.then(data => {

let today = data.prayers[0];

// Gregorian date
document.getElementById("date").innerText =
new Date(today.date).toDateString();

// Hijri
document.getElementById("hijri").innerText =
today.hijri;

// Location
document.getElementById("location").innerText =
data.zone;

// Prayer Times
let prayers = {
Fajr: today.fajr,
Dhuhr: today.dhuhr,
Asr: today.asr,
Maghrib: today.maghrib,
Isha: today.isha
};

// find next prayer
let now = new Date();

let nextName="";
let nextTime="";

for(let name in prayers){

let t = new Date(today.date+" "+prayers[name]);

if(t > now){
nextName=name;
nextTime=prayers[name];
break;
}
}

document.getElementById("nextName").innerText=nextName;
document.getElementById("nextTime").innerText=nextTime;

// countdown
setInterval(()=>{
let target=new Date(today.date+" "+nextTime);
let diff=target-new Date();

let h=Math.floor(diff/1000/60/60);
let m=Math.floor(diff/1000/60)%60;

document.getElementById("countdown")
.innerText=`in ${h}h ${m}m`;

},1000);

});
