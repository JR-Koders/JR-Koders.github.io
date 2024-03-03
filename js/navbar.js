function writeNav(pathToImg) {


    var newStyle = document.createElement('style');

    // Set the content of the style element
    newStyle.textContent = `
            /* remove links underlining */
            a {
                text-decoration: none;
            }

            /* remove dots before li */
            li {
                list-style-type: none;
            }

            .code {
                border-radius: 5px;
            }

            /* Custom font sizes for headings */
            h1,
            h2,
            h3
            {
                font-size: 3em;
                /* Adjust the font size as per your requirement */
            }
            h4,
            h5,
            h6
            {
                font-size: 1.7em;
            }

            /* Custom font size for paragraphs */
            p,
            pre>code {
                font-size: 1.15em;
                /* Adjust the font size as per your requirement */
            }
        `;

    // Append the new style element to the end of the head section
    document.head.appendChild(newStyle);


    // nav bar
    document.write(`
    <div class="container mt-2 mb-5">
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid ps-0">
            <!-- Logo and Channel Name -->
            <a class="navbar-brand" href="https://jr-koders.github.io">
                <img src="${pathToImg}" alt="JR-Koders Logo" width="40" height="40" id="logo-nav"
                        style="border-radius: 10px;" class="d-inline-block align-top">
            </a>
            <a class="navbar-brand" href="https://jr-koders.github.io">
            <!--  d-none d-sm-block to make it disappear on phones-->
                        JR-Koders
            </a>
            <!-- Moon Icon for Dark Mode Toggle -->
            <a href="#" class="nav-link d-lg-none ms-auto me-4" id="dark-mode-toggle-left">
                <i class="fas fa-moon"></i>
            </a>
            <!-- Navbar Toggler for smaller screens -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Navbar Items -->
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <!-- YouTube Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://youtube.com/@JR-Koders" target="_blank" rel="noreferrer noopener">YouTube</a>
                    </li>
                    <!-- GitHub Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/JR-Koders" target="_blank" rel="noreferrer noopener">GitHub</a>
                    </li>
                    <!-- BuyMeACoffee Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://buymeacoffee.com/JRKoders" target="_blank" rel="noreferrer noopener">BuyMeACoffee</a>
                    </li>
                    <!-- Twitter Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="https://twitter.com/@JR_Koders" target="_blank" rel="noreferrer noopener">Twitter</a>
                    </li>
                    <!-- Contact Link -->
                    <li class="nav-item">
                        <a class="nav-link" href="mailto:jr-koders@gmail.com">Contact</a>
                    </li>
                    <!-- Moon Icon for Dark Mode Toggle -->
                    <li class="nav-item d-none d-lg-block">
                        <a href="#" class="nav-link" id="dark-mode-toggle-right">
                            <i class="fas fa-moon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</div>`);
}