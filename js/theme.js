// load saved theme when page opens

if(localStorage.getItem("theme") === "light"){
document.body.classList.add("light-mode");
}

// toggle theme

function toggleTheme(){

if(document.body.classList.contains("light-mode")){

document.body.classList.remove("light-mode");
localStorage.setItem("theme","dark");

}else{

document.body.classList.add("light-mode");
localStorage.setItem("theme","light");

}

}
