const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const btns = document.querySelectorAll(".btn")
const nums = document.querySelectorAll(".num")
const lines = document.querySelectorAll(".line")
let i = 0

nextBtn.addEventListener("click", () => {
    lines[i].style.backgroundColor = "var(--active)"
    nums[i+1].style.borderColor = "var(--active)"
    if(i >= 2) {
        nextBtn.style.backgroundColor = "var(--desactive)"
        nextBtn.style.cursor = "not-allowed"
        return 
    }
    i += 1
})

prevBtn.addEventListener("click", () => {
    console.log("prev")
})