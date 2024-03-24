const wrapper = document.querySelector(".main__imgs")

window.addEventListener("load", () => {
    createCardImg()
})

async function createCardImg() {
    wrapper.innerHTML = ""
    const dataImgs = await getData()
    for(let i = 0; i < dataImgs.length; i++) {
        const img = document.createElement("img")
        img.classList.add("imgs__img")
        img.classList.add("skeleton")
        
        const imgUrl = dataImgs[i].urls.regular
        img.src = `${imgUrl}`;
        
        wrapper.appendChild(img)
    }
}

async function getData() {
    let randomNum = getRandomNumber()
	const KEY = "WjxNwhFEgQQxJ82PI8iaSb0cn8plhkL0_fLkU1EN78A";
    const URL = `https://api.unsplash.com/collections/${randomNum}/photos?`;

    try {
        const response = await fetch(`${URL}client_id=${KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return error
    }
};

function getRandomNumber() {
    let max = 206
    let min = 1
    return Math.floor(Math.random() * (max - min ) + min)
}