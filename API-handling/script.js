const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(API_URL);
    const data = await response.json();

    const first10data = data.slice(0,10);
    console.log(first10data);
    
}

getPosts();