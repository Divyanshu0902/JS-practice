const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getAPIdata(){
    const HTTPresponse = await fetch(API_URL);
    return await HTTPresponse.json();
}

async function renderPosts(){
    const apiData = await getAPIdata();
    
    const cardsDataArray = apiData.map((card) => {
        return `
            <div>
                <h3>#${card.id}<h3>
                <h2>${card.title}</h3>
                <p>${card.body}</p>
            </div>
        `;
    })

    const cardsString =cardsDataArray.join('\n');

    const cardsHTMLstring = cardsString.trim().replace(/\s+/g, " ");;

    const postsContainer = document.querySelector('.postsContainer');
    postsContainer.innerHTML = cardsHTMLstring;
}

renderPosts();