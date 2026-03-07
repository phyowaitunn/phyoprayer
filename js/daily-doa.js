const doas = [

{
title:"Before Eating",
arabic:"اللّهُمَّ بارِكْ لَنا فيما رَزَقْتَنا وَقِنا عَذابَ النّار",
meaning:"O Allah, bless us in what You have provided and protect us from the punishment of the Fire."
},

{
title:"After Eating",
arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
meaning:"Praise be to Allah who fed us and gave us drink."
},

{
title:"Before Sleeping",
arabic:"بِاسْمِكَ اللّهُمَّ أَمُوتُ وَأَحْيَا",
meaning:"In Your name O Allah I die and I live."
},

{
title:"After Waking Up",
arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا",
meaning:"Praise be to Allah who gave us life after causing us to die."
},

{
title:"Entering Home",
arabic:"بِسْمِ اللَّهِ وَلَجْنَا",
meaning:"In the name of Allah we enter."
}

];


const container = document.getElementById("doaContainer");

doas.forEach(doa => {

const card = document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${doa.title}</h3>

<p class="arabic">${doa.arabic}</p>

<p class="meaning">${doa.meaning}</p>

<button class="audio">Play Audio</button>

`;

container.appendChild(card);

});
