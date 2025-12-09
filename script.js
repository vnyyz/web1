
if (typeof Typed !== 'undefined') {
    const multipleTextEl = document.querySelector('.multiple-text');
    if (multipleTextEl) {
        new Typed('.multiple-text', {
            strings: [
                'Lorem',
                'Ipsum',
                'Dolor',
                'sit',
                'amet'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });
    }
}

function setupThemeControls() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');

    if (!themeToggle || !themeIcon) {
        return;
    }

    function toggleTheme() {
        body.classList.toggle('light-mode');
        const isLightMode = body.classList.contains('light-mode');
        themeIcon.className = isLightMode ? 'bx bx-moon theme-icon' : 'bx bx-sun theme-icon';
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.className = 'bx bx-moon theme-icon';
        } else {
            body.classList.remove('light-mode');
            themeIcon.className = 'bx bx-sun theme-icon';
        }
    }

    themeToggle.addEventListener('click', toggleTheme);
    loadSavedTheme();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeControls);
} else {
    setupThemeControls();
}