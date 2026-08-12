const url = "https://jsonplaceholder.typicode.com/posts";

async function getAPIdata(){
    const response = await fetch(url);
    const cards = await response.json();

    const cardsArr = cards.map((card) => {
        return `
            <article class="post-card">
                <div class="post-meta">
                    <span class="post-id">#${card.id}</span>
                    <span class="user-id">#${card.userId}</span>
                </div>

                <h2>${card.title}</h2>

                <p>${card.body}</p>
            </article>
        `;
    })

    const cardsHTML = cardsArr.join("\n");

    const postsContainer = document.querySelector(".section");
    postsContainer.innerHTML = cardsHTML;

}

getAPIdata();