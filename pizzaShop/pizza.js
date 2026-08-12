const orderBtn = document.querySelector(".orderNow");
const statusBox = document.querySelector(".statusValue");

orderBtn.addEventListener("click",()=>{
    statusBox.innerText = "Order Placed!👍"
    statusBox.classList.add("orderPlaced")
    setTimeout(()=>{
        statusBox.innerText = "🍞 Preparing Dough..."
        statusBox.className = "statusValue preparing"
        setTimeout(()=>{
            statusBox.innerText = "🧀 Adding Cheese..."
            statusBox.classList.add("cheese")
            setTimeout(()=>{
                statusBox.innerText = "🔥 Baking Pizza..."
                statusBox.className = "statusValue baking"
                setTimeout(()=>{
                    statusBox.innerText = "✅ Ready!"
                    statusBox.className = "statusValue ready"
                },2000)
            },2000)
        },2000)
    },2000)
})