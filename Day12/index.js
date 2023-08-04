let expandBtn = document.querySelectorAll(".expand")
let closeBtn = document.querySelectorAll(".close")
let answerText = document.querySelectorAll(".answer")
let cuestionsWrapper = document.querySelectorAll(".cuestion")

closeBtn.forEach((ele,i) => {
    ele.addEventListener("click", () => {
        ele.classList.add("desactive")
        expandBtn[i].classList.remove("desactive")
        answerText[i].classList.add("desactive")
        cuestionsWrapper[i].style.backgroundColor = "transparent"
    })
})

expandBtn.forEach((ele, i) => {
    ele.addEventListener("click", () => {
        ele.classList.add("desactive")
        closeBtn[i].classList.remove("desactive")
        answerText[i].classList.remove("desactive")
        cuestionsWrapper[i].style.backgroundColor = "#fff"
    })
})