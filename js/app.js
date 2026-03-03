function startApp(){
window.location.href = "home.html";
}

/* auto slide */
let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(()=>{
if(slides.length>0){
slides[i].classList.remove("active");
i=(i+1)%slides.length;
slides[i].classList.add("active");
}
},3000);

