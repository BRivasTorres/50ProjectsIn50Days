const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const btns = document.querySelectorAll(".btn")

nextBtn.addEventListener("click", () => {
    console.log("next")
    console.log(btns)
})

prevBtn.addEventListener("click", () => {
    console.log("prev")
})