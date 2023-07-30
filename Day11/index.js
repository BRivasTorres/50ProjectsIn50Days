let initialText = document.querySelector(".initialText")
let keyEvents = document.querySelectorAll(".event")
let eventKey = document.querySelector(".eventKey")
let eventKeyCode = document.querySelector(".eventKeyCode")
let eventCode = document.querySelector(".eventCode")

window.addEventListener("keydown", (e) => {
    initialText.classList.add("invisible")
    keyEvents.forEach(event => {
        event.classList.remove("invisible")
    })    
    eventKey.innerHTML = e.key
    eventKeyCode.innerHTML = e.keyCode
    eventCode.innerHTML = e.code
})
