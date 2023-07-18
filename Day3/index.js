let btnMenu = document.querySelector(".menu")
let main = document.querySelector(".main")
let icons = document.querySelectorAll(".icon")
let btnClose = document.querySelector(".close")

btnMenu.addEventListener("click", () => {
    main.classList.add("rotate")
    btnClose.classList.remove("hidden")    
    btnMenu.classList.add("hidden")
    icons.forEach(icon => {
        icon.classList.remove("invisible")
    })
})


btnClose.addEventListener("click", () => {
    btnClose.classList.add("hidden")
    btnMenu.classList.remove("hidden")
    main.classList.remove("rotate")
    
    icons.forEach(icon => {
        icon.classList.add("invisible")
    })
})
