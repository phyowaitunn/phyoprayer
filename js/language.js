const translations = {

en:{
home:"Home",
prayer:"Prayer",
quran:"Quran",
settings:"Settings",
nextPrayer:"Next Prayer"
},

ms:{
home:"Laman",
prayer:"Solat",
quran:"Quran",
settings:"Tetapan",
nextPrayer:"Solat Seterusnya"
},

id:{
home:"Beranda",
prayer:"Sholat",
quran:"Quran",
settings:"Pengaturan",
nextPrayer:"Sholat Berikutnya"
}

};


// load saved language
function applyLanguage(){

const lang = localStorage.getItem("lang") || "en";

document.querySelectorAll("[data-lang]").forEach(el=>{

const key = el.getAttribute("data-lang");

if(translations[lang][key]){
el.innerText = translations[lang][key];
}

});

}


// change language
function changeLanguage(lang){

localStorage.setItem("lang",lang);

applyLanguage();

}


// run when page loads
document.addEventListener("DOMContentLoaded",applyLanguage);
