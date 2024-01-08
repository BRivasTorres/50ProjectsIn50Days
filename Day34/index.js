const btn = document.querySelector(".main__button")
const div = document.querySelector(".animated__div")
const num = document.querySelector(".animated__num")
const mainCont = document.querySelector(".main__content")

let countID;
const updateCount = () => {
    countID = setInterval(() => {
		let temp = parseInt(num.innerHTML);
		let newTemp = temp - 1;
		num.innerHTML = newTemp;

		if (newTemp < 0) {
			num.innerHTML = 3;
		}
	}, 1000);
}

window.addEventListener("load", () => {
    num.classList.add("animation-num")
    updateCount()
    
    setTimeout(() => {
        div.style.display = "none"
        mainCont.style.display = "block"
        clearInterval(countID);
    }, 4000);
})

btn.addEventListener("click", () => {
    mainCont.style.display = "none"
    div.style.display = "block"
    num.classList.add("animation-num")
    updateCount();    
    
    setTimeout(() => {
        div.style.display = "none"
        mainCont.style.display = "block"
        clearInterval(countID);
    }, 4000)
})