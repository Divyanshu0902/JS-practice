const countValue = document.querySelector(".countValue");
const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");

let count = 0; 

incBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
})

decBtn.addEventListener("click", () => {
    count--;
    countValue.innerText = count;
})

