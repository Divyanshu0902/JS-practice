const url = "https://jsonplaceholder.typicode.com/posts";

const postContainer = document.querySelector(".section");

function getAPIdata(){
    fetch(url)
    .then(res => res.json())
    .then(cards => {
        const cardsArray = cards.map(card => {
            return `
                <article class="post-card">
                    <div class="post-meta">
                        <span class="post-id">#${card.id}</span>
                        <span class="user-id">#${card.userId}</span>
                    </div>

                    <h2>${card.title}</h2>

                    <p>${card.body}</p>
                </article>
            `
        })

        return cardsArray
    })
    .then(cardsArray => cardsArray.join("\n"))
    .then(htmlString => {
        postContainer.innerHTML = htmlString;
    })
    .catch(error => console.error("Error:",error))
}

getAPIdata();