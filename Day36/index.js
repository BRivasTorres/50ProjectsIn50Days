const container = document.querySelector(".main")
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const DIVS = 500

for(let i = 0; i < DIVS; i++) {
    const div = document.createElement("div")
    div.classList.add("div")
    
    div.addEventListener("mouseover", () => setColor(div))
    div.addEventListener("mouseout", () => removeColor(div))
    
    container.appendChild(div)
}

function setColor(el) {
    let color = getRandomColor()
    el.style.background = `${color}`;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
    el.style.background = "#1D1D1D";
    el.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

