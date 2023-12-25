const btns = document.querySelectorAll(".main__button")
const circles = document.querySelectorAll(".circle")

btns.forEach((btn, i) => {
    let curr = circles[i].classList
    
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        if (curr.contains("activeAnimation")) {
            curr.remove("activeAnimation");
            curr.add("desactiveAnimation");
        } else {
            curr.remove("desactiveAnimation");
            curr.add("activeAnimation");
        }
        trick(i)
    })
})

const trick = (index) => {
    if([...btns].every(el => el.classList.contains("active"))) {
        {
			if (index === 2) {
				circles[1].classList.remove("activeAnimation");
				circles[1].classList.add("desactiveAnimation");
				btns[1].classList.remove("active");
			} else if (index === 1) {
				circles[0].classList.remove("activeAnimation");
				circles[0].classList.add("desactiveAnimation");
				btns[0].classList.remove("active");
			} else {
				circles[2].classList.remove("activeAnimation");
				circles[2].classList.add("desactiveAnimation");
				btns[2].classList.remove("active");
			}
		}
    } 
}