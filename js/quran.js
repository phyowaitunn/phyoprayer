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
