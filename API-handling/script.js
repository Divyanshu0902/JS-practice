const postContainer = document.querySelector("#posts-container");
const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(API_URL);
    const data = await response.json();

    const first10data = data.slice(0,10);
    
    const articles = data.map((card) => {
        return `
            <article class = "post-card">
                <div class="post-id">
                    #${card.id}
                </div>

                <h2>
                    ${card.title}
                </h2>

                <p>
                    ${card.body}
                </p>
            </article>
        `;
    });

    const cardsString = articles.join("\n");

    console.log(cardsString);
    postContainer.innerHTML = cardsString;

}

getPosts();