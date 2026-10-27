(function(){
    const button=document.querySelector('.menu-toggle'),nav=document.querySelector('.navlinks');
    if(button&&nav){button.addEventListener('click',function(){const open=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));button.textContent=open?'✕':'☰'});
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');
    button.setAttribute('aria-expanded','false');button.textContent='☰'}))}const links=document.querySelectorAll('.navlinks a[href^="#"]:not(.nav-cta)');
    const sections=[...links].map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-30% 0px -60% 0px'});sections.forEach(s=>observer.observe(s))}})();

