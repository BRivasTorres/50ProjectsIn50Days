const feedBackBoxs = document.querySelectorAll(".feedback__box");
const responseSpan = document.querySelector(".greetings__response")
const mainFeedback = document.querySelector(".main__feedback");
const mainGreetings = document.querySelector(".main__greetings");
const form = document.querySelector(".form")

let response; 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    feedBackBoxs.forEach(item => {
        if(item.classList.contains("active")) {
            response = item.querySelector("span").textContent            
        }
    })
    responseSpan.innerHTML = response
    mainFeedback.style.display = "none"
    mainGreetings.style.display = "block"
})

feedBackBoxs.forEach((box, idx) => {
    box.addEventListener("click", () => {
        feedBackBoxs.forEach((item, i) => {
            item.classList.toggle("active", i === idx)
        })
    })
})

