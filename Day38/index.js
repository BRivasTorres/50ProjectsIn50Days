const btns = document.querySelectorAll(".main__btn")
const imgsWrapper = document.querySelector(".main__imgs")
const imgsUrls = ["./imgs/home.jpg", "./imgs/blog.jpg", "./imgs/work.jpg", "./imgs/about.jpg"]

btns.forEach((btn, i) => btn.addEventListener("click", () => {
    setBackgroundImg(i)
    setActiveBtn(i)
}))

const setBackgroundImg = (idx) => {
    imgsWrapper.style.backgroundImage = `url(${imgsUrls[idx]})`
}

const setActiveBtn = (idx) => {
    const btnsArr = [...btns]
    btnsArr.forEach((btn, id) => {
        if(id === idx) {
            btn.style.color = "#8E44AD";
        } else {
            btn.style.color = ""
        }
    })
}