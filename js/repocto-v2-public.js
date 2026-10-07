"use strict";
document.documentElement.classList.add("js-ready");
const header=document.querySelector("[data-header]");
const nav=document.querySelector("[data-nav]");
const toggle=document.querySelector("[data-menu-toggle]");
const progress=document.querySelector("[data-progress]");
const reveals=[...document.querySelectorAll(".reveal")];
const memoryButtons=[...document.querySelectorAll("[data-memory]")];
const memoryCard=document.querySelector("[data-memory-card]");
const memoryData={
  alfa:{tag:"ALFA · Dayanım",title:"Bağlantı Braketi Revizyonu",text:"2026 test sonuçları, karşılaştırma notları ve kaynak sayfaları birlikte saklanır.",stats:[3,"ilişkili doküman",2,"uzman notu",1,"karar özeti"]},
  beta:{tag:"BETA · Termal",title:"Soğutma Paketi İncelemesi",text:"Termal koşullar, revizyon karşılaştırmaları ve doğrulama kayıtları tek görünümde tutulur.",stats:[4,"ilişkili doküman",3,"uzman notu",2,"karar özeti"]},
  gama:{tag:"GAMA · NVH",title:"Titreşim Kaynakları Özeti",text:"Test bulguları, ölçüm notları ve iyileştirme kararları aranabilir hafızada ilişkilendirilir.",stats:[2,"ilişkili doküman",1,"uzman notu",1,"karar özeti"]}
};
function onScroll(){
  if(header) header.classList.toggle("is-scrolled",scrollY>24);
  if(progress){
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`;
  }
}
addEventListener("scroll",onScroll,{passive:true});onScroll();
if(toggle&&nav){
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
}
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.12});
  reveals.forEach(el=>io.observe(el));
}else reveals.forEach(el=>el.classList.add("is-visible"));
function renderMemory(key){
  const d=memoryData[key];if(!d||!memoryCard)return;
  memoryCard.innerHTML=`<span>${d.tag}</span><h3>${d.title}</h3><p>${d.text}</p><div><b>${d.stats[0]}</b><small>${d.stats[1]}</small><b>${d.stats[2]}</b><small>${d.stats[3]}</small><b>${d.stats[4]}</b><small>${d.stats[5]}</small></div>`;
  memoryButtons.forEach(b=>b.classList.toggle("active",b.dataset.memory===key));
}
memoryButtons.forEach(b=>b.addEventListener("click",()=>renderMemory(b.dataset.memory)));