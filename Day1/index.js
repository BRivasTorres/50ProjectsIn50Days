let currImage = document.querySelectorAll(".picture")

currImage.forEach(img => {
    img.addEventListener("click", () => {
        currImage.forEach(img => {
            img.classList.remove("curr")
        })
        img.classList.add("curr")
    })
})

