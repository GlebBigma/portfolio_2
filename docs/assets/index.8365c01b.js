const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};f();let m=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${m}px`);window.onload=()=>console.log("\u0420\u0423\u0421\u0421\u041A\u0418\u0419 \u0412\u041E\u0415\u041D\u041D\u042B\u0419 \u041A\u041E\u0420\u0410\u0411\u041B\u042C \u0418\u0414\u0418 \u041D\u0410\u0425*\u0419");document.querySelectorAll('a.scrollTo[href^="#"]').forEach(r=>r.addEventListener("click",function(o){o.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}));const g=document.body,s=document.getElementById("btn-burger"),l=document.getElementById("sidebar"),p=document.getElementById("patrioticWrapper"),c=document.getElementById("mainContent"),d=()=>{g.classList.toggle("overflow-hidden"),s.classList.toggle("active"),l.classList.toggle("active"),p.classList.toggle("blurred"),c.classList.toggle("blurred")};s.addEventListener("click",d,!1);const a=()=>l.classList.contains("active")&&d();c.addEventListener("click",a,!1);const y=document.querySelectorAll(".sidebar__nav-link");y.forEach(r=>r.addEventListener("click",a,!1));
