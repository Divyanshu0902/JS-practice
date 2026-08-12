const url = "https://jsonplaceholder.typicode.com/posts";

async function getAPIdata(){
    const response = await fetch(url);
    const jsValues = response.json();

    console.log(jsValues);
}