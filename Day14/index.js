let openClose = document.querySelector(".open-close") 
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")

openClose.addEventListener("click", () => {
    line1.classList.toggle("close")
})