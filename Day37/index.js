const wrapperCards = document.querySelector(".main")

const colors = {
    grass : "#DEFDE0",
    fire : "#FDDFDF",
    water : "#DEF3FD",
    bug : "#F8D5A3",
    poison : "#98D7A5",
    flying : "#F5F5F5",
    normal : "#F5F5F5",
    electric : "#FCF7DE",
    ground: "#F4E7DA",
    fairy : "#FCEAFF",
    psychic : "#EAEDA1",
    fighting : "#E6E0D4",
}
    
const getData = async(url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


const createCart = async() => {
    
    for(let i = 1; i < 150; i++) {
        let currItem = await getItem(i)
                
        const card = document.createElement("div")
        
        let num = i.toString().padStart(3, "0")
        let name = currItem.name
        let type = currItem.types[0].type.name
        let srcImg = currItem.sprites.front_default
        let color = colors[type]
        card.style.backgroundColor = `${color}`;
        card.classList.add("main__card")
        
        card.innerHTML = `
            <img src=${srcImg}>
            <span>#${num}</span>
            <h2>${name}</h2>
            <span>Type: ${type}</span>
        `;
        wrapperCards.appendChild(card)
    }  
}

const getItem = async(n) => {
    const item = await getData(`https://pokeapi.co/api/v2/pokemon/${n}`);    
    return item
}

console.log(createCart())