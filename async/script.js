const btn = document.querySelector(".button")
const text = document.querySelector(".text")

// method 1:
// btn.addEventListener("click",()=>{

//     setTimeout(()=>{
//         textContent.innerText = "Loading"
//         setTimeout(()=>{
//             textContent.innerText = "Loading."
//             setTimeout(()=>{
//                 textContent.innerText = "Loading.."
//                 setTimeout(()=>{
//                     textContent.innerText = "Loading..."
//                     setTimeout(()=>{
//                         textContent.innerText = "Loading...."
//                         setTimeout(()=>{
//                             textContent.innerText = "Finished!"
//                             },1000)
//                     },500)
//                 },500)
//             },500)
//         },500)
//     },500)
    
// })


//mdthod 2:
const states = [
    "Loading",
    "Loading.",
    "Loading..",
    "Loading...",
    "Finished!"
]

btn.addEventListener("click", ()=>{
    text.innerText = states[0]
    let i=1;
    const intervalId = setInterval(()=>{
        text.innerText = states[i]
        i++;
        if(i==states.length) {
            clearInterval(intervalId)
        }
    },700)

    console.log(x)
    
})