const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector("#nav-links");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
document.querySelectorAll("#nav-links a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));
if("IntersectionObserver" in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("animate");observer.unobserve(e.target);}}),{threshold:.12});
 document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
}
const year=document.querySelector("#year"); if(year) year.textContent=new Date().getFullYear();