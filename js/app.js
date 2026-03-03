let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

let index = 0;

/* show slide */
function showSlide(i){
slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");
}

/* buttons */
function next(){
if(index < slides.length-1){
index++;
showSlide(index);
}
}

function prev(){
if(index > 0){
index--;
showSlide(index);
}
}

/* =====================
   SWIPE SYSTEM
===================== */

let startX = 0;
let endX = 0;

document.addEventListener("touchstart",(e)=>{
startX = e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{
endX = e.changedTouches[0].clientX;
handleSwipe();
});

function handleSwipe(){

let diff = startX - endX;

if(Math.abs(diff) > 50){

if(diff > 0){
next();     // swipe left
}else{
prev();     // swipe right
}

}
}
