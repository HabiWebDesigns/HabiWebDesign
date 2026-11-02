const header = document.querySelector('.site-header');
const topBtn = document.querySelector('.to-top');
const mobileNav = document.querySelector('.mobile-nav');
const menuToggle = document.querySelector('.menu-toggle');
const cursorGlow = document.querySelector('.cursor-glow');
window.addEventListener('scroll', () => { if (header) header.classList.toggle('scrolled', scrollY > 20); if (topBtn) topBtn.classList.toggle('show', scrollY > 500) });
if (topBtn) topBtn.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
if (menuToggle) menuToggle.onclick = () => { mobileNav.classList.toggle('open'); document.body.classList.toggle('menu-open') };
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => { mobileNav.classList.remove('open'); document.body.classList.remove('menu-open') }));
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => { if (a.getAttribute('href') === current) a.classList.add('active') });
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
if (cursorGlow && matchMedia('(pointer:fine)').matches) { cursorGlow.style.display = 'block'; window.addEventListener('pointermove', e => { cursorGlow.style.left = e.clientX + 'px'; cursorGlow.style.top = e.clientY + 'px' }) }
document.addEventListener('click', e => { if (e.target.closest('a,button')) { const r = document.createElement('span'); r.className = 'ripple'; r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px'; document.body.appendChild(r); setTimeout(() => r.remove(), 600) } });

const habiFacts = [
    { text: 'We are a web design studio based in the Philippines.', href: 'contact.html', label: 'Start a project', external: false },
    { text: 'Our work includes web design, development, and focused landing pages.', href: 'contact.html', label: 'Plan your website', external: false },
    { text: 'We also design and redesign Squarespace websites.', href: 'contact.html', label: 'Ask about Squarespace', external: false },
    { text: 'We create digital invitations and websites for weddings and events.', href: 'contact.html', label: 'Tell us your idea', external: false },
    { text: 'Have an idea for a website? We would love to hear what you are planning.', href: 'contact.html', label: 'Start a conversation', external: false },
    { text: 'Want to connect with Habi beyond the website? Find us on Facebook.', href: 'https://www.facebook.com/profile.php?id=61595461890693', label: 'Visit our Facebook', external: true }
];

const habiWidget = document.createElement('aside');
habiWidget.className = 'habi-widget';
habiWidget.setAttribute('aria-label', 'A little about Habi');
habiWidget.innerHTML = `
    <button class="habi-widget-launcher" type="button" aria-expanded="false" aria-controls="habi-widget-panel">
        <img src="assets/habi-logo-light.png" alt="" class="habi-widget-logo habi-widget-logo--light">
        <img src="assets/habi-logo-dark.png" alt="" class="habi-widget-logo habi-widget-logo--dark">
        <span>A little about Habi</span>
    </button>
    <section class="habi-widget-panel" id="habi-widget-panel" aria-label="A little about Habi">
        <header class="habi-widget-header">
            <div class="habi-widget-brand">
                <img src="assets/habi-logo-light.png" alt="" class="habi-widget-logo habi-widget-logo--light">
                <img src="assets/habi-logo-dark.png" alt="" class="habi-widget-logo habi-widget-logo--dark">
                <span>Habi Web Designs</span>
            </div>
            <button class="habi-widget-close" type="button" aria-label="Minimize widget">&minus;</button>
        </header>
        <p class="habi-widget-label">A little about us</p>
        <p class="habi-widget-fact" aria-live="polite"></p>
        <div class="habi-widget-actions">
            <a class="habi-widget-link" href="contact.html"></a>
            <button class="habi-widget-next" type="button" aria-label="Show another fact" title="Show another fact">&orarr;</button>
        </div>
    </section>`;
document.body.appendChild(habiWidget);

const habiPanel = habiWidget.querySelector('.habi-widget-panel');
const habiLauncher = habiWidget.querySelector('.habi-widget-launcher');
const habiFactText = habiWidget.querySelector('.habi-widget-fact');
const habiFactLink = habiWidget.querySelector('.habi-widget-link');
let currentHabiFact = -1;

function showHabiFact() {
    let nextFact = Math.floor(Math.random() * habiFacts.length);
    if (habiFacts.length > 1 && nextFact === currentHabiFact) {
        nextFact = (nextFact + 1) % habiFacts.length;
    }
    currentHabiFact = nextFact;
    const fact = habiFacts[currentHabiFact];
    habiFactText.textContent = fact.text;
    habiFactLink.href = fact.href;
    habiFactLink.textContent = fact.label;
    if (fact.external) {
        habiFactLink.target = '_blank';
        habiFactLink.rel = 'noopener noreferrer';
    } else {
        habiFactLink.removeAttribute('target');
        habiFactLink.removeAttribute('rel');
    }
}

function setHabiWidgetOpen(isOpen) {
    habiWidget.classList.toggle('is-open', isOpen);
    habiPanel.hidden = !isOpen;
    habiLauncher.setAttribute('aria-expanded', String(isOpen));
}

habiLauncher.addEventListener('click', () => setHabiWidgetOpen(true));
habiWidget.querySelector('.habi-widget-close').addEventListener('click', () => setHabiWidgetOpen(false));
habiWidget.querySelector('.habi-widget-next').addEventListener('click', showHabiFact);
showHabiFact();
setHabiWidgetOpen(false);
