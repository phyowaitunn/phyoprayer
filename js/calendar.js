let date = new Date()

function loadCalendar(){

const day = date.getDate()
const month = date.getMonth()+1
const year = date.getFullYear()

fetch(`https://api.aladhan.com/v1/gToH?date=${day}-${month}-${year}`)

.then(res=>res.json())

.then(data=>{

const hijri = data.data.hijri

document.getElementById("hijri").innerText =
`${hijri.day} ${hijri.month.en} ${hijri.year} H`

document.getElementById("gregorian").innerText =
`${day}/${month}/${year}`

document.getElementById("monthName").innerText =
hijri.month.en

})

generateDays()

}

function generateDays(){

const daysContainer = document.getElementById("calendarDays")

daysContainer.innerHTML=""

const total = 30

for(let i=1;i<=total;i++){

let div = document.createElement("div")

div.innerText=i

if(i === new Date().getDate()){

div.classList.add("today-day")

}

daysContainer.appendChild(div)

}

}

function prevMonth(){

date.setMonth(date.getMonth()-1)

loadCalendar()

}

function nextMonth(){

date.setMonth(date.getMonth()+1)

loadCalendar()

}

loadCalendar()
