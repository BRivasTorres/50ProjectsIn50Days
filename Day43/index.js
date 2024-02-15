const serch = document.querySelector(".form__search")
const form = document.querySelector(".main__form")
const dataWrapper = document.querySelector(".main__data")
const main = document.querySelector(".main")

window.addEventListener("load", () => {
    getData()
})

form.addEventListener("submit", (e) => e.preventDefault())
serch.addEventListener("input", () => {
})

const getData = async() => {
    loadingData()
    const response = await fetch(` https://randomuser.me/api?results=50`);
    const data = await response.json()
    return printData(data.results)
}

const printData = (data) => {
    dataWrapper.innerHTML = ""
    const dataSection = document.createElement("section")
    dataSection.classList.add("data__wrapper")
    
    for(let i = 0; i < data.length; i++) {
        const card = document.createElement("div")
        card.classList.add("wrapper__card")

        const name = data[i].name.first + data[i].name.last
        const imgSrc = data[i].picture.thumbnail
        const location = data[i].location.state + data[i].location.country
        
        card.innerHTML = `
            <img src=${imgSrc} alt=${name} class="card__img" />
            <aside class="card__aside">
                <h3 class="card__name">${name}</h3>
                <span class="card__location">${location}</span>
            </aside>
        `;   
        dataSection.appendChild(card)
    }
    dataWrapper.appendChild(dataSection);
}

const loadingData = () => {
    const h2 = document.createElement("h2")
    h2.innerHTML = "Charging Data..."
    h2.classList.add("data__charging")
    dataWrapper.appendChild(h2)
}