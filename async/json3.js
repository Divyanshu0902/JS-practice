async function f(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
}
f();