const translations = {

en:{
home:"Home",
prayer:"Prayer",
quran:"Quran",
settings:"Settings"
},

ms:{
home:"Laman",
prayer:"Solat",
quran:"Quran",
settings:"Tetapan"
},

id:{
home:"Beranda",
prayer:"Sholat",
quran:"Quran",
settings:"Pengaturan"
}

};

function applyLanguage(){

const lang = localStorage.getItem("lang") || "en";

document.querySelectorAll("[data-lang]").forEach(el=>{

const key = el.getAttribute("data-lang");

if(translations[lang][key]){
el.innerText = translations[lang][key];
}

});

}

function changeLanguage(lang){

localStorage.setItem("lang",lang);

applyLanguage();

}

document.addEventListener("DOMContentLoaded",applyLanguage);
