(() => {
    const root = document.documentElement;
    const intro = document.getElementById('intro-screen');
    if (!intro || !root.classList.contains('intro-pending')) return;

    const skipButton = intro.querySelector('.intro-skip');
    const pageContent = [...document.querySelectorAll('.site-header, .mobile-nav, main, footer, .to-top')];
    let isClosing = false;

    pageContent.forEach(element => {
        element.inert = true;
        element.setAttribute('aria-hidden', 'true');
    });

    try {
        sessionStorage.setItem('habi-intro-seen', '1');
    } catch (error) {
        // The current page still completes normally if storage is unavailable.
    }

    skipButton.focus({ preventScroll: true });

    function closeIntro() {
        if (isClosing) return;
        isClosing = true;
        root.classList.add('intro-leaving');

        window.setTimeout(() => {
            root.classList.remove('intro-pending', 'intro-leaving');
            intro.remove();
            pageContent.forEach(element => {
                element.inert = false;
                element.removeAttribute('aria-hidden');
            });
        }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 180 : 720);
    }

    skipButton.addEventListener('click', closeIntro);
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeIntro();
    });

    window.setTimeout(closeIntro, matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 1750);
    window.setTimeout(closeIntro, 2500);
})();
