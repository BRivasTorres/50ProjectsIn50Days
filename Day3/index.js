let btnMenu = document.querySelector(".menu")
let main = document.querySelector(".main")
let icons = document.querySelectorAll(".icons")
let btnClose = document.querySelector(".close")

btnMenu.addEventListener("click", () => {
    main.className = "rotate"
    btnClose.classList.remove("hidden")    
    btnMenu.classList = "hidden"
})

btn.addEventListener("click", () => {
    icons.forEach(icon => {
        icon.className.remove("invisible")
    })
})

btnClose.addEventListener("click", () => {
    btnClose.className = "hidden"
    btnMenu.className.remove("hidden")
    main.className.remove("rotate")
    console.log("click")
})
