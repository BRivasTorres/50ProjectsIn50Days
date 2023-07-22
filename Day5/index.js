let porcentage = document.querySelector("#porcentage")

const sumPorcentage = () => {
    setTimeout(() => {
        let currPorcentage = parseInt(porcentage.innerHTML, 10)
        let newPorcentage = currPorcentage + 1
        porcentage.innerHTML = `${newPorcentage}%` 
        
        if(newPorcentage < 100) {
            sumPorcentage()
        }
    }, 40)
}

window.addEventListener("DOMContentLoaded", () => { 
    sumPorcentage()
}) 

