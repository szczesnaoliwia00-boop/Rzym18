const target = new Date("December 13, 2026 18:55:00");

function updateCountdown(){

const now=new Date();

const diff=target-now;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

const seconds=Math.floor((diff/1000)%60);

document.getElementById("timer").innerHTML=`

<div class="time-box">
<span>${days}</span>
<p>DNI</p>
</div>

<div class="time-box">
<span>${hours}</span>
<p>GODZIN</p>
</div>

<div class="time-box">
<span>${minutes}</span>
<p>MINUT</p>
</div>

<div class="time-box">
<span>${seconds}</span>
<p>SEKUND</p>
</div>

`;

}

updateCountdown();

setInterval(updateCountdown,1000);function flipCard(){

document.querySelector(".gift-card").classList.toggle("flip");

}const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade");

observer.observe(section);

});