let slides=document.querySelectorAll(".slide");
let dots=document.querySelectorAll(".dot");

let index=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");
}

function next(){
index++;
if(index>=slides.length) index=slides.length-1;
showSlide(index);
}

function prev(){
index--;
if(index<0) index=0;
showSlide(index);
}
