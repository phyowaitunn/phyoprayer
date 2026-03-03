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


/*prayer real data*/

const zone="PNG01"; // Penang

fetch(`https://api.waktusolat.app/v2/solat/${zone}`)
.then(r=>r.json())
.then(data=>{

let today=data.prayers[0];

// DATE
let d=new Date(today.date);
document.getElementById("date").innerText=
d.toLocaleDateString("en-GB",
{day:"2-digit",month:"long",year:"numeric"});

// HIJRI
document.getElementById("hijri").innerText=
today.hijri+" H";

// LOCATION
document.getElementById("location").innerText=
data.zone;

// PRAYER TIMES
let prayers=[
["Imsak",today.imsak],
["Fajr",today.fajr],
["Dhuhr",today.dhuhr],
["Asr",today.asr],
["Maghrib",today.maghrib],
["Isha",today.isha]
];

let now=new Date();
let nextName="";
let nextTime="";

for(let p of prayers){
let t=new Date(today.date+" "+p[1]);
if(t>now){
nextName=p[0];
nextTime=p[1];
break;
}
}

document.getElementById("nextPrayer")
.innerText=`${nextName}, ${nextTime}`;

// COUNTDOWN
setInterval(()=>{
let target=new Date(today.date+" "+nextTime);
let diff=target-new Date();

let h=Math.floor(diff/3600000);
let m=Math.floor(diff/60000)%60;

document.getElementById("countdown")
.innerText=`${nextName} in ${h} hour ${m} minute`;

},1000);

});
