fetch("https://api.alquran.cloud/v1/surah")
.then(res=>res.json())
.then(data=>{

const surahList=document.getElementById("surahList");

data.data.forEach(surah=>{

surahList.innerHTML+=`

<div class="surah-card">

<div class="surah-number">
${surah.number}
</div>

<div class="surah-info">

<h3>${surah.englishName}</h3>

<p class="surah-ar">
${surah.name}
</p>

<p class="surah-en">
${surah.englishNameTranslation}
</p>

</div>

</div>

`;

});

});
