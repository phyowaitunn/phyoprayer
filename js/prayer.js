const lat=5.4141;
const lon=100.3288;

fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=3`)
.then(res=>res.json())
.then(data=>{

let t=data.data.timings;
let d=data.data.date;

document.getElementById("todayDate")
.innerText=d.readable;

document.getElementById("fajr").innerText=t.Fajr;
document.getElementById("dhuhr").innerText=t.Dhuhr;
document.getElementById("asr").innerText=t.Asr;
document.getElementById("maghrib").innerText=t.Maghrib;
document.getElementById("isha").innerText=t.Isha;

let prayers=[
["Fajr",t.Fajr],
["Dhuhr",t.Dhuhr],
["Asr",t.Asr],
["Maghrib",t.Maghrib],
["Isha",t.Isha]
];

let now=new Date();
let nextName="",nextTime="";

for(let p of prayers){

let time=p[1].split(":");

let pt=new Date();
pt.setHours(time[0]);
pt.setMinutes(time[1]);

if(pt>now){
nextName=p[0];
nextTime=p[1];
break;
}
}

document.getElementById("nextPrayer")
.innerText=`${nextName} - ${nextTime}`;

setInterval(()=>{
let time=nextTime.split(":");

let target=new Date();
target.setHours(time[0]);
target.setMinutes(time[1]);

let diff=target-new Date();

let h=Math.floor(diff/3600000);
let m=Math.floor(diff/60000)%60;

document.getElementById("countdown")
.innerText=`Starts in ${h}h ${m}m`;

},1000);

});
