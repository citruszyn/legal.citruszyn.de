const searchInput = document.querySelector("[data-search]")

let searchContent = []

searchInput.addEventListener("input", (e) =>{
    const value = e.target.value
    console.log(value)
})