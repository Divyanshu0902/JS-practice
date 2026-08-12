const url = "https://jsonplaceholder.typicode.com/posts";

async function f1(){
    const response = await fetch(url);
    const text = await response.text();
    const data = JSON.parse(text);
    console.log(data);
}

f1();