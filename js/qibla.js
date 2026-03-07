const compass = document.getElementById("compassRing");
const degreeText = document.getElementById("degree");

let qiblaDirection = 0;

/* KAABA LOCATION */
const kaabaLat = 21.4225;
const kaabaLng = 39.8262;

/* GET USER LOCATION */

navigator.geolocation.getCurrentPosition(function(pos){

let lat = pos.coords.latitude;
let lng = pos.coords.longitude;

qiblaDirection = getQiblaDirection(lat,lng);

});


/* CALCULATE QIBLA DIRECTION */

function getQiblaDirection(lat,lng){

const φK = kaabaLat * Math.PI/180;
const λK = kaabaLng * Math.PI/180;

const φ = lat * Math.PI/180;
const λ = lng * Math.PI/180;

const y = Math.sin(λK-λ);
const x = Math.cos(φ)*Math.tan(φK) - Math.sin(φ)*Math.cos(λK-λ);

let qibla = Math.atan2(y,x) * 180/Math.PI;

return (qibla + 360) % 360;

}


/* COMPASS SENSOR */

function startCompass(){

window.addEventListener("deviceorientationabsolute", compassRotate, true);

window.addEventListener("deviceorientation", compassRotate, true);

}

function compassRotate(event){

let heading = event.alpha;

if(heading === null) return;

let rotation = heading - qiblaDirection;

compass.style.transform = `rotate(${-rotation}deg)`;

degreeText.innerText = Math.round(heading) + "°";

}


/* iPhone permission */

if(typeof DeviceOrientationEvent.requestPermission === "function"){

DeviceOrientationEvent.requestPermission()
.then(permissionState => {

if(permissionState === "granted"){
startCompass();
}

})
.catch(console.error);

}else{

startCompass();

}


/* CLOCK */

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock(){

const now = new Date();

const h = now.getHours();
const m = now.getMinutes();
const s = now.getSeconds();

hour.style.transform = `rotate(${h*30 + m/2}deg)`;
minute.style.transform = `rotate(${m*6}deg)`;
second.style.transform = `rotate(${s*6}deg)`;

}

setInterval(updateClock,1000);
