let divs = document.querySelectorAll(".content")

let prevScrollPos = window.pageYOffset;
let currDiv = 0

window.addEventListener("scroll", () => {
    let currScrollPos = window.pageYOffset
    let differenceScroll = Math.round(currScrollPos - prevScrollPos)
    if (differenceScroll === 2) {
        if(currDiv >= 12) {return currDiv = 12}
        if(currDiv%2 === 0) {
            addAnimationEven(currDiv)
            currDiv++
        } else {
            addAnimationOdd(currDiv)
            currDiv++
        }
    } else if(differenceScroll === -1) {
        if(currDiv <= 0) {return currDiv = 0}
        if(currDiv%2 === 0) {
            removeAnimationEven(currDiv)
            currDiv--
        } else {
            removeAnimationOdd(currDiv)
            currDiv--
        }
    }
    prevScrollPos = currScrollPos;
})

const addAnimationEven = (i) => {
    divs[i].classList.add("even")
}

const addAnimationOdd = (i) => {
    divs[i].classList.add("odd")
}

const removeAnimationEven = (i) => {
    divs[i].classList.remove("even")
}
const removeAnimationOdd = (i) => {
    divs[i].classList.remove("odd")
}

