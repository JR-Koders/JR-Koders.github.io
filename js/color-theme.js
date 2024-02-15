document.getElementById('dark-mode-toggle-left').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
});
document.getElementById('dark-mode-toggle-right').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
    }
});