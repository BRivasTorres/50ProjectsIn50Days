const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const imgs = document.querySelectorAll(".img")
const imgsWrapper = document.querySelector(".main__carousel")

let i = 0
let interval = setInterval(update, 2000);

function update() {
    i++
    updateImage()
}

const updateImage = () => {
    if(i > imgs.length - 1) {
        i = 0;
    } else if(i < 0) {
        i = imgs.length - 1
    }
    
    imgsWrapper.style.transform = `translateX(${-i * 450}px)`;
}

const resetInterval = () => {
    clearInterval(interval)
    interval = (update, 2000)
}

nextBtn.addEventListener("click", () => {
    i++
    updateImage()
    resetInterval()
})


prevBtn.addEventListener("click", () => {
    i--
    updateImage()
    resetInterval()
})