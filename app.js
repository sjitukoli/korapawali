const API="https://script.google.com/macros/s/AKfycbzjfFSG1UmEWoQxBEI602vmH9AhUic_bhHC7Ppbx7GX5WDQwVnsBt77IBg4PnLqVInF/exec";

fetch(API+"?action=news")
.then(r=>r.json())
.then(d=>{
 let h="";
 d.slice(1).forEach(n=> h+=`<div class='card'>📰 ${n[1]}</div>`);
 document.getElementById("news").innerHTML=h;
});

function send(){
 fetch(`${API}?action=addComplaint&name=${name.value}&mobile=${mobile.value}&msg=${msg.value}`);
 alert("तक्रार यशस्वीरीत्या नोंदवली गेली आहे.");
}
