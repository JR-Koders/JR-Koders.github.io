
function dark() {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
}

function light() {
    document.documentElement.setAttribute('data-bs-theme', 'light')
}

document.getElementById('dark-mode-toggle-left').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        light();
    }
    else {
        dark();
    }
});
document.getElementById('dark-mode-toggle-right').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        light();
    }
    else {
        dark();
    }
});


// Check to see if Media-Queries are supported
if (window.matchMedia) {
    // Check if the dark-mode Media-Query matches
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Dark
        dark();
        console.log('using dark mode! switching to dark!');
    } else {
        // Light
        light();
        console.log('using light mode! switching to light!');
    }
} else {
    // Default (when Media-Queries are not supported)
    console.log('your browser doesn\'t support media queries...');
}


// if the user changes the machine's theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
    console.log('changed color theme, new theme:', newColorScheme);
    newColorScheme === "dark" ? dark() : light();
});


