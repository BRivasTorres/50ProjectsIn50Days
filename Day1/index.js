let currImage = document.querySelectorAll(".picture")
let titleImage = document.querySelectorAll(".title")

currImage.forEach(img => {
    img.addEventListener("click", () => {
        currImage.forEach((img) => {
            img.classList.remove("curr")
        })
        img.classList.add("curr")
    })
})

