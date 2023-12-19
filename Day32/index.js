const btns = document.querySelectorAll(".main__button")
const circles = document.querySelectorAll(".circle")

btns.forEach((btn, i) => {
    let currActives = 0
    
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
        let curr = circles[i].classList
                
        if (curr.contains("activeAnimation")) {
            curr.remove("activeAnimation");
            curr.add("desactiveAnimation");
        } else {
            curr.remove("desactiveAnimation");
            curr.add("activeAnimation");
        }
        currActives++
    })
})