function openTab(tab){

document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"))
event.target.classList.add("active")

document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"))

document.getElementById(tab).classList.add("active")

}

function toggle(header){

let card = header.parentElement

card.classList.toggle("collapsed")

let symbol = header.querySelector("span")

if(card.classList.contains("collapsed")){
symbol.innerText="+"
}else{
symbol.innerText="-"
}

}

function playAudio(id){

let audio=document.getElementById(id)

audio.play()

}
