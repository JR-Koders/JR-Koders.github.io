
const articles = [
    {
        title: 'Introduction to command line interface',
        author: 'John Doe',
        date: '02/10/2024',
        description: 'Learn how to use the command line interface, an essential part of computing.',
        link: 'CLI.html',
    },
    {
        title: 'The Future of Artificial Intelligence',
        author: 'Jane Smith',
        date: '02/11/2024',
        description: 'Explore the latest advancements and future possibilities of artificial intelligence technology.',
        link: 'future_of_AI.html',
    },
    {
        title: 'Tips for Improving Your Website\'s Performance',
        author: 'Tech Guru',
        date: '02/12/2024',
        description: 'Boost your website\'s speed and responsiveness with these expert tips and techniques.',
        link: 'improve_website.html',
    },
    {
        title: 'Introduction to Blockchain Technology',
        author: 'Tech Enthusiast',
        date: '02/13/2024',
        description: 'Discover the fundamentals of blockchain technology and its potential applications in various industries.',
        link: 'blockchain.html',
    },
    {
        title: 'Introduction to command line interface',
        author: 'John Doe',
        date: '02/10/2024',
        description: 'Learn how to use the command line interface, an essential part of computing.',
        link: 'CLI.html',
    },
    {
        title: 'The Future of Artificial Intelligence',
        author: 'Jane Smith',
        date: '02/11/2024',
        description: 'Explore the latest advancements and future possibilities of artificial intelligence technology.',
        link: 'future_of_AI.html',
    },
    {
        title: 'Tips for Improving Your Website\'s Performance',
        author: 'Tech Guru',
        date: '02/12/2024',
        description: 'Boost your website\'s speed and responsiveness with these expert tips and techniques.',
        link: 'improve_website.html',
    },
    {
        title: 'Introduction to Blockchain Technology',
        author: 'Tech Enthusiast',
        date: '02/13/2024',
        description: 'Discover the fundamentals of blockchain technology and its potential applications in various industries.',
        link: 'blockchain.html',
    },
    {
        title: 'Introduction to command line interface',
        author: 'John Doe',
        date: '02/10/2024',
        description: 'Learn how to use the command line interface, an essential part of computing.',
        link: 'CLI.html',
    },
    {
        title: 'The Future of Artificial Intelligence',
        author: 'Jane Smith',
        date: '02/11/2024',
        description: 'Explore the latest advancements and future possibilities of artificial intelligence technology.',
        link: 'future_of_AI.html',
    },
    {
        title: 'Tips for Improving Your Website\'s Performance',
        author: 'Tech Guru',
        date: '02/12/2024',
        description: 'Boost your website\'s speed and responsiveness with these expert tips and techniques.',
        link: 'improve_website.html',
    },
    {
        title: 'Introduction to Blockchain Technology',
        author: 'Tech Enthusiast',
        date: '02/13/2024',
        description: 'Discover the fundamentals of blockchain technology and its potential applications in various industries.',
        link: 'blockchain.html',
    },
    {
        title: 'Introduction to command line interface',
        author: 'John Doe',
        date: '02/10/2024',
        description: 'Learn how to use the command line interface, an essential part of computing.',
        link: 'CLI.html',
    },
    {
        title: 'The Future of Artificial Intelligence',
        author: 'Jane Smith',
        date: '02/11/2024',
        description: 'Explore the latest advancements and future possibilities of artificial intelligence technology.',
        link: 'future_of_AI.html',
    },
    {
        title: 'Tips for Improving Your Website\'s Performance',
        author: 'Tech Guru',
        date: '02/12/2024',
        description: 'Boost your website\'s speed and responsiveness with these expert tips and techniques.',
        link: 'improve_website.html',
    },
    {
        title: 'Introduction to Blockchain Technology',
        author: 'Tech Enthusiast',
        date: '02/13/2024',
        description: 'Discover the fundamentals of blockchain technology and its potential applications in various industries.',
        link: 'blockchain.html',
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




