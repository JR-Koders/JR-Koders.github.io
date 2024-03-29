
const articles = [
    {
        title: 'Use Linux on Windows! - WSL install guide',
        author: 'JR-Koders',
        date: 'Jan 22, 2024',
        description: `Wanna learn Linux but afraid of regretting it? Or just need Linux in the comfort of windows? We\'ve got you!<br>
        We\'ll help you install it on windows using WSL, Windows Subsystem for Linux!`,
        link: 'WSL.html',
    },
    {
        title: 'How to Download Files from the Web Using Python',
        author: 'JR-Koders',
        date: 'Nov 22, 2023',
        description: `In this tutorial, you'll learn how to download files from the internet using Python.
        <br>Even if you're a beginner, don't worry, we've got your back!`,
        link: 'download-file-python.html',
    },
    {
        title: 'Install Kali-linux CLI and Destkop on WSL',
        author: 'JR-Koders',
        date: 'February 2, 2024',
        description: `In this guide, we'll walk you through the process of installing Kali-linux, both in its
        command-line interface (CLI) and desktop environment, using WSL.`,
        link: 'kali-linux.html',
    },
];



let article_counter = 0;



// Generate the "articles" heading
document.write('<h1 class="mt-5 mb-5">Articles</h1>');



// write the container of all the articles
document.write(`<ul class="list-unstyled" id="articles-container"></ul>
<!-- could be class="list-group" -->`);


function add_article() {
    const articles_container = document.getElementById('articles-container');

    articles_container.innerHTML += `
        <li>
            <div class="container mt-4 px-0 px-lg-2">
                <div class="card">
                    <div class="card-body">
                        <div class="row align-items-end">
                            <div class="col">
                                <h5 class="card-title">${articles[article_counter]['title']}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${articles[article_counter]['author']}</h6>
                                <footer class="d-sm-none text-secondary small">${articles[article_counter]['date']}</footer>
                            </div>
                            <div class="col-auto">
                                <footer class="blockquote-footer text-end d-none d-sm-block">${articles[article_counter]['date']}</footer>
                            </div>
                        </div>
                        <div class="card-text gradient-text">
                            <p>${articles[article_counter]['description']}</p>
                        </div>
                        <a href="./blog/${articles[article_counter]['link']}" class="card-link">Read More</a>
                    </div>
                </div>
            </div>
        </li>
    `;

    article_counter += 1;
    if (article_counter > (articles.length - 1)) {
        const button = document.getElementById('read-more');
        button.hidden = true;
    }
}


// add_article(
//     'Introduction to command line interface',
//     'John Doe',
//     '02/10/2024',
//     'Learn how to use the command line interface, an essential part of computing.',
//     'CLI.html'
// );

const articles_number_in_a_row = 5;



for (let index = 0;
    index < (articles.length < articles_number_in_a_row ? articles.length : articles_number_in_a_row);
    index++) {
    // index < .... => repeats the number of articles if smaller than articles_num, opposite articles_num

    // write the content of current article
    add_article();

}


// add the button "more articles"

document.write(`
<div class="d-grid">
    <button type="button" class="btn btn-primary btn-block" id="read-more">Read more</button>
</div>
`);


document.getElementById('read-more').addEventListener('click', () => {
        if (article_counter < articles.length) {
            // if still articles left, then add some
            const articles_left = (articles.length - articles_number_in_a_row);

            for (let index = 0;
                // add the right number of articles
                index < (articles_left < articles_number_in_a_row ? articles_left : articles_number_in_a_row);
                index++) {
                add_article();
            }
            console.log('number of articles displayed:', article_counter);
        }
        else {
            console.log('already displayed all the articles');
            document.getElementById('read-more').hidden = true;
        }
    });




