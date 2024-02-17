const form = document.querySelector(".main__form")
const serchInput = document.querySelector(".form__search")
const dataWrapper = document.querySelector(".main__data")
const main = document.querySelector(".main")

let dataArr = []

window.addEventListener("load", () => {
    getData("https://randomuser.me/api?results=50");
})
form.addEventListener("submit", (e) => e.preventDefault())


serchInput.addEventListener("input", (e) => {
    const val = e.target.value
    const newData = dataArr.filter(item => item.name.first.toLowerCase().includes(val) || item.location.country.toLowerCase().includes(val))
    printData(newData)
})

const getData = async(url) => {
    loadingData()
    const response = await fetch(`${url}`);
    const data = await response.json()
    dataArr = data.results
    return printData(dataArr)
}

const printData = (data) => {
    dataWrapper.innerHTML = ""
    const dataSection = document.createElement("section")
    dataSection.classList.add("data__wrapper")
    
    if(data.length > 0) {
        for(let i = 0; i < data.length; i++) {
            const card = document.createElement("div")
            card.classList.add("wrapper__card")
    
            const name = data[i].name.first + " " + data[i].name.last
            const imgSrc = data[i].picture.thumbnail
            const location = data[i].location.state + " " + data[i].location.country
            
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
    } else {
        const h2 = document.createElement("h2")
        h2.style.padding = "2rem"
        h2.style.fontSize = "2.2rem"
        h2.innerHTML = "No data found..."
        dataWrapper.appendChild(h2)
    }
    
}

const loadingData = () => {
    const h2 = document.createElement("h2")
    h2.innerHTML = "Charging Data..."
    h2.classList.add("data__charging")
    dataWrapper.appendChild(h2)
}