
function dark() {
    const pathStart = window.location.href.includes("index.html") ? '.' : '..';
    // page's color theme
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    // nav bar
    const img = document.getElementById('logo-nav');
    img.src = `${pathStart}/imgs/logo_dark.png`;
    // favicon
    console.log("links found in head:", document.getElementsByTagName('link'));
    const oldFavicon = document.head.querySelector("link[rel='icon']");
    if (oldFavicon) {
        oldFavicon.remove();
        console.log("deleted old favicon!");
    }
    else {
        console.log("couldn't delete old favicon");
    }
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = `${pathStart}/imgs/logo_dark.png`;
    newFavicon.type = "image/x-icon";
    document.head.appendChild(newFavicon);
    console.log("switched favicon color to black!");
}

function light() {
    const pathStart = window.location.href.includes("index.html") ? '.' : '..';
    // page's color theme
    document.documentElement.setAttribute('data-bs-theme', 'light');
    // nav bar
    const img = document.getElementById('logo-nav');
    img.src = `${pathStart}/imgs/logo_light.png`;
    // favicon
    const oldFavicon = document.head.querySelector("link[rel='icon']");
    if (oldFavicon) {
        oldFavicon.remove();
        console.log("deleted old favicon!");
    }
    else {
        console.log("couldn't delete old favicon");
    }
    const newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = `${pathStart}/imgs/logo_light.png`;
    newFavicon.type = "image/x-icon";
    document.head.appendChild(newFavicon);
    console.log("switched favicon color to light!");
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


