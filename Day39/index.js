const passWordInput = document.querySelector("#password-input")
const backgroundImg = document.querySelector(".background")
const form = document.querySelector("#form")

let value
let blurPx = 10

window.addEventListener("load", () => {
    backgroundImg.style.filter = `blur(${blurPx}px)`    
})

passWordInput.addEventListener("input", (e) => {
    value = e.target.value.length
    blurPx = 10 - value
    backgroundImg.style.filter = `blur(${blurPx}px)`;            
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
})