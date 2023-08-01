let expandBtn = document.querySelectorAll(".expand")
let closeBtn = document.querySelectorAll(".close")
let answerText = document.querySelectorAll(".answer")


closeBtn.forEach((ele,i) => {
    ele.addEventListener("click", () => {
        ele.classList.add("desactive")
        console.log(i)
        console.log(answerText[i])
    })
})

expandBtn.forEach(ele => {
    ele.addEventListener("click", () => {
        ele.classList.add("active")
    })
})