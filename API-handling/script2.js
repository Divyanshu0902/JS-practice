// in this file, I try to design the whole JS

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getAPIdata(){
    const response = await fetch(API_URL);
    const allData = await response.json();
    return allData.slice(0,10);
}

async function renderCards(){
    const data = await getAPIdata();

    const cardsArray = data.map(item => {
        return `
            <div>
                <h3>#${item.id}</h3>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>
        `;
    })

    const cardsString = cardsArray.join("\n");

    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = cardsString;
}

renderCards();