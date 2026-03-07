const zikr = [

{

arabic:"أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",

latin:"Astaghfirullah hal 'azim...",

meaning:"I seek forgiveness from Allah the Almighty.",

target:3

},

{

arabic:"لا إله إلا الله وحده لا شريك له",

latin:"Laa ilaaha ill-Allaah wahdahu laa shareeka lah",

meaning:"There is no God except Allah.",

target:10

}

]

let index=0

let count=0

function loadZikr(){

let z=zikr[index]

document.getElementById("arabic").innerText=z.arabic

document.getElementById("latin").innerText=z.latin

document.getElementById("meaning").innerText=z.meaning

document.getElementById("target").innerText="Target: "+z.target+"x"

count=0

updateUI()

}

function countZikr(){

count++

if(navigator.vibrate){

navigator.vibrate(50)

}

updateUI()

}

function updateUI(){

let z=zikr[index]

document.getElementById("counter").innerText=count

let percent=(count/z.target)*100

document.getElementById("progressBar").style.width=percent+"%"

if(count>=z.target){

alert("Zikr Completed")

}

}

function nextZikr(){

index++

if(index>=zikr.length){

index=0

}

loadZikr()

}

function prevZikr(){

index--

if(index<0){

index=zikr.length-1

}

loadZikr()

}

loadZikr()
