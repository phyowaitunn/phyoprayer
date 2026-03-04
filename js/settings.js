// NIGHT MODE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change",function(){

if(toggle.checked){

document.body.classList.add("dark");

}else{

document.body.classList.remove("dark");

}

});


// AZAN NOTIFICATION

const azan = document.getElementById("azanToggle");

azan.addEventListener("change",function(){

if(azan.checked){

alert("Azan notification enabled");

}else{

alert("Azan notification disabled");

}

});


// LANGUAGE CHANGE

const lang = document.getElementById("language");

lang.addEventListener("change",function(){

alert("Language changed to: " + lang.value);

});
