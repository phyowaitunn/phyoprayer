let surahs=[]

fetch("https://api.alquran.cloud/v1/surah")

.then(res=>res.json())

.then(data=>{

surahs=data.data

render(surahs)

})

function render(data){

const list=document.getElementById("surahList")

list.innerHTML=""

data.forEach(s=>{

list.innerHTML+=`

<div class="surah" onclick="openSurah(${s.number})">

<div class="left">

<div class="num">${s.number}</div>

<div>

<div class="name">${s.englishName}</div>

<div class="info">${s.numberOfAyahs} verses</div>

</div>

</div>

<div class="ar">${s.name}</div>

</div>

`

})

}

document.getElementById("search").addEventListener("input",function(){

const q=this.value.toLowerCase()

const filtered=surahs.filter(s=>s.englishName.toLowerCase().includes(q))

render(filtered)

})

function openSurah(num){

document.getElementById("surahList").style.display="none"
document.getElementById("reader").style.display="block"

fetch("https://api.alquran.cloud/v1/surah/"+num+"/editions/quran-uthmani,en.asad")

.then(res=>res.json())

.then(data=>{

const ar=data.data[0].ayahs
const en=data.data[1].ayahs

document.getElementById("title").innerText=data.data[0].englishName

let html=""

for(let i=0;i<ar.length;i++){

html+=`

<div class="ayah">

<div class="arabic">${ar[i].text}</div>

<div class="translation">${en[i].text}</div>

<button class="play" onclick="play(${num})">▶ Play Surah</button>

</div>

`

}

document.getElementById("ayahs").innerHTML=html

})

}

function play(num){

let url="https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/"+num+".mp3"

new Audio(url).play()

}

function back(){

document.getElementById("reader").style.display="none"
document.getElementById("surahList").style.display="block"

}
