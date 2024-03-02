

document.head.innerHTML += `
<style>

        .code-block {
            background-color: rgb(47, 47, 47);
        }

        .hljs {
            background-color: rgb(15, 15, 15);
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    </style>
    `;

function findLanguageClass(element) {
    // Get the list of classes of the element
    const classList = element.classList;

    // Iterate through each class in the class list
    for (let i = 0; i < classList.length; i++) {
        // Check if the class name starts with "language"
        if (classList[i].startsWith("language")) {
            // If found, return the class name
            return classList[i].replace("language-", "");
        }
    }

    // If no class starting with "language" is found, return null
    return null;
}



var codeSnippets = document.getElementsByClassName('code-block');




for (let index = 0; index < codeSnippets.length; index++) {

    codeSnippets[index].classList.add('rounded-3', 'mt-0', 'mb-5');

    const language = findLanguageClass(codeSnippets[index]);


    codeSnippets[index].innerHTML = `
    <!-- Top section with language title and copy button -->
        <div class="rounded-top d-flex align-items-center px-2 py-0">
            <span class="ms-2" style="color: rgb(180, 180, 180); font-size: 13px;">${language}</span>
            <button class="btn btn-secondary copy-button ms-auto"
                style="background-color: transparent; border-color: transparent;">
                <i class="fa-regular fa-clipboard fa-xs" style="color: rgb(180, 180, 180);"></i>
                <span style="color: rgb(180, 180, 180); font-size: 12px;">Copy code</span>
            </button>
        </div>` + codeSnippets[index].innerHTML;

    codeSnippets[index].getElementsByTagName('pre')[0].classList.add('m-0', 'p-0', 'center');

    codeSnippets[index].getElementsByTagName('pre')[0].getElementsByTagName('code')[0].classList.add('px-4', language);


}



// Copy button code

document.querySelectorAll(".code-block").forEach( function (element) { element.querySelector(".copy-button").addEventListener("click", function () {
    var commandText = element.querySelector("pre code").textContent.trim();
    navigator.clipboard.writeText(commandText).then(function () {
        var copyButton = element.querySelector(".copy-button");
        copyButton.innerHTML = '<i class="fas fa-check fa-xs" style="color: rgb(180, 180, 180);"></i> <span style="color: rgb(180, 180, 180); font-size: 12px;">Copied!</span>';
        setTimeout(function () {
            copyButton.innerHTML = '<i class="fa-regular fa-clipboard fa-xs" style="color: rgb(180, 180, 180);"></i> <span style="color: rgb(180, 180, 180); font-size: 12px;">Copy code</span>';
        }, 1000);
    }, function (err) {
        console.error("Failed to copy code: ", err);
    });
});
})


