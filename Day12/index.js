let expandBtn = document.querySelectorAll(".expand")
let closeBtn = document.querySelectorAll(".close")
let answerText = document.querySelectorAll(".answer")


closeBtn.forEach((ele,i) => {
    ele.addEventListener("click", () => {
        ele.classList.add("desactive")
        expandBtn[i].classList.remove("desactive")
        answerText[i].classList.add("desactive")
    })
})

expandBtn.forEach((ele, i) => {
    ele.addEventListener("click", () => {
        ele.classList.add("desactive")
        closeBtn[i].classList.remove("desactive")
        answerText[i].classList.remove("desactive")
    })
})