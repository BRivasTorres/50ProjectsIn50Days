const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const btns = document.querySelectorAll(".btn")
const nums = document.querySelectorAll(".num")
const lines = document.querySelectorAll(".line")
let i = 0

nextBtn.addEventListener("click", () => {
    lines[i].style.backgroundColor = "var(--active)"
    nums[i+1].style.borderColor = "var(--active)"
    prevBtn.style.backgroundColor = "var(--active)"
    if(i >= 2) {
        nextBtn.style.backgroundColor = "var(--desactive)"
        nextBtn.style.cursor = "not-allowed"
        return 
    }
    i += 1
    console.log(i)
})

prevBtn.addEventListener("click", () => {
    nextBtn.style.backgroundColor = "var(--active)"
    lines[i].style.backgroundColor = "var(--desactive)"
    nums[i+1].style.borderColor = "var(--desactive)"
    if(i < 0) {
        prevBtn.style.backgroundColor = "var(--desactive)"
        prevBtn.style.cursor = "not-allowed"
        return 
    }
    i -= 1
    console.log(i)
})

//TODO cambiar el HTML para enlazar numeros con lineas.