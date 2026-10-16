const header=document.querySelector('.site-header');
const topBtn=document.querySelector('.to-top');
const mobileNav=document.querySelector('.mobile-nav');
const menuToggle=document.querySelector('.menu-toggle');
const cursorGlow=document.querySelector('.cursor-glow');
window.addEventListener('scroll',()=>{if(header)header.classList.toggle('scrolled',scrollY>20);if(topBtn)topBtn.classList.toggle('show',scrollY>500)});
if(topBtn)topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
if(menuToggle)menuToggle.onclick=()=>{mobileNav.classList.toggle('open');document.body.classList.toggle('menu-open')};
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');document.body.classList.remove('menu-open')}));
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('[data-nav]').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(cursorGlow&&matchMedia('(pointer:fine)').matches){cursorGlow.style.display='block';window.addEventListener('pointermove',e=>{cursorGlow.style.left=e.clientX+'px';cursorGlow.style.top=e.clientY+'px'})}
document.addEventListener('click',e=>{if(e.target.closest('a,button')){const r=document.createElement('span');r.className='ripple';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),600)}});
const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('.form-status');status.textContent='Thanks! Your inquiry is ready to send. Connect this form to your preferred email service or backend to receive submissions.';form.reset()})}
