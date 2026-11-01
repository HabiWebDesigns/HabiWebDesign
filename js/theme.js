const themeStorageKey = 'habi-theme';
let initialTheme = 'dark';

try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    if (savedTheme === 'dark' || savedTheme === 'light') initialTheme = savedTheme;
} catch (error) {
    console.error('Unable to read the saved color theme.', error);
}

document.documentElement.dataset.theme = initialTheme;

const updateThemeToggle = theme => {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const isDark = theme === 'dark';
    const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;
    toggle.textContent = isDark ? '☀' : '☾';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.title = label;
};

document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggle(document.documentElement.dataset.theme);

    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        updateThemeToggle(theme);

        try {
            localStorage.setItem(themeStorageKey, theme);
        } catch (error) {
            console.error('Unable to save the color theme preference.', error);
        }
    });
});
