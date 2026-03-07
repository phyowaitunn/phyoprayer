let currentDate = new Date()

const events = {

"1 Ramadan":"Ramadan Begins",

"1 Shawwal":"Eid al-Fitr",

"10 Dhul Hijjah":"Eid al-Adha",

"9 Dhul Hijjah":"Day of Arafah"

}

function loadCalendar(){

let day = currentDate.getDate()

let month = currentDate.getMonth()+1

let year = currentDate.getFullYear()

fetch(`https://api.aladhan.com/v1/gToH?date=${day}-${month}-${year}`)

.then(res=>res.json())

.then(data=>{

let hijri = data.data.hijri

document.getElementById("hijriDate").innerText =
`${hijri.day} ${hijri.month.en} ${hijri.year} H`

document.getElementById("gregorianDate").innerText =
`${day}/${month}/${year}`

document.getElementById("monthTitle").innerText =
`${hijri.month.en} ${hijri.year}`

let key = `${hijri.day} ${hijri.month.en}`

document.getElementById("islamicEvent").innerText =
events[key] || ""

})

generateDays()

}

function generateDays(){

let container = document.getElementById("calendarDays")

container.innerHTML=""

let today = new Date().getDate()

for(let i=1;i<=30;i++){

let div = document.createElement("div")

div.innerText=i

if(i===today){

div.classList.add("today")

}

container.appendChild(div)

}

}

function prevMonth(){

currentDate.setMonth(currentDate.getMonth()-1)

loadCalendar()

}

function nextMonth(){

currentDate.setMonth(currentDate.getMonth()+1)

loadCalendar()

}

loadCalendar()
