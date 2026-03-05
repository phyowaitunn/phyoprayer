fetch("https://api.alquran.cloud/v1/surah")
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("surahList");

data.data.forEach(surah=>{

container.innerHTML+=`

<div class="surah-card">

<div class="surah-number">
${surah.number}
</div>

<div class="surah-text">

<div class="surah-name">
${surah.englishName}
</div>

<div class="surah-arabic">
${surah.name}
</div>

<div class="surah-translation">
${surah.englishNameTranslation}
</div>

</div>

</div>

`;

});

});





let surahData = [];

fetch("https://api.alquran.cloud/v1/surah")
.then(res=>res.json())
.then(data=>{

surahData = data.data;
showSurah(surahData);

});

function showSurah(list){

const container = document.getElementById("surahList");

container.innerHTML="";

list.forEach(surah=>{

container.innerHTML+=`

<a href="surah.html?number=${surah.number}" class="surah-card">

<div class="surah-number">
${surah.number}
</div>

<div class="surah-text">

<div class="surah-name">
${surah.englishName}
</div>

<div class="surah-arabic">
${surah.name}
</div>

<div class="surah-translation">
${surah.englishNameTranslation}
</div>

</div>

</a>

`;

});

}

document.getElementById("searchSurah")
.addEventListener("input",e=>{

const text = e.target.value.toLowerCase();

const filtered = surahData.filter(s=> 
s.englishName.toLowerCase().includes(text)
);

showSurah(filtered);

});

