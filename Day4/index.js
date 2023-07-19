let searchBtn = document.querySelector(".icon")
let input = document.querySelector(".input")

searchBtn.addEventListener("click", () => {
    if(input.style.display === "none") {
        input.style.display = "flex"
    } else {
        input.style.display = "none"
    }
})