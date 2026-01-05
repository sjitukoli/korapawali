const API="PASTE_YOUR_API_LINK";

function loadSchemes(){
 fetch(API+"?action=schemes").then(r=>r.json()).then(d=>{
  let h="<h2>योजना</h2>";
  d.forEach(s=>h+=`<div class='card'>${s}</div>`);
  document.getElementById("schemes").innerHTML=h;
 });
}

function searchGR(){
 let k=document.getElementById("grkey").value;
 fetch("https://api.allorigins.win/raw?url=https://maharashtra.gov.in/GR?search="+k)
 .then(r=>r.text()).then(t=>document.getElementById("grresult").innerHTML=t);
}

function loadOfficers(){
 fetch("https://api.allorigins.win/raw?url=https://jalgaon.gov.in/zp-officers")
 .then(r=>r.text()).then(t=>document.getElementById("officerlist").innerHTML=t);
}

loadSchemes();
loadOfficers();
