const startBtn = document.querySelector(".start__btn")
const cars = document.querySelectorAll(".cars__car");
const wrapperStart = document.querySelector(".wrapper__start")
const wrapperChoose = document.querySelector(".wrapper__choose");
const wrapperPlay = document.querySelector(".wrapper__play");
const score = document.querySelector(".score__points")

const imgSrcs = [
	"./imgs/car1.png",
	"./imgs/car2.png",
	"./imgs/car3.webp",
	"./imgs/car4.png",
];
let selecteImg = 0

startBtn.addEventListener("click", () => {
    wrapperStart.classList.add("up")
    wrapperChoose.classList.remove("down")
})

cars.forEach((car, idx) => {
    car.addEventListener("click", () => {
        wrapperChoose.classList.add("up")
        wrapperPlay.classList.remove("down")
        selecteImg = idx
        updateTime()
        createCars()
    })
})

const updateTime = () => {
    setInterval(() => {
        updateSeconds()
    }, 1000);
}

const updateSeconds = () => {
	const timeSeconds = document.querySelector(".time__seconds");

	let currentSeconds = parseInt(timeSeconds.innerHTML);
	currentSeconds++;

	if (currentSeconds > 59) {
		currentSeconds = 0;
		updateMinutes();
	}
    if(currentSeconds === 10) showMessage()
	timeSeconds.innerHTML = currentSeconds.toString().padStart(2, "0");
};

const updateMinutes = () => {
    const timeMinutes = document.querySelector(".time__minutes");

    let currentMinutes = parseInt(timeMinutes.innerHTML);
	currentMinutes += 1
	timeMinutes.innerHTML = currentMinutes.toString().padStart(2, "0");
}

const createCars = () => {
    const img = document.createElement("img");
	img.src = imgSrcs[selecteImg];
	img.classList.add("play__img");

    const {x, y} = randomImgPosition()
    img.style.top = `${x}px`;
    img.style.left = `${y}px`;

    img.addEventListener("click", catchCar)
	wrapperPlay.appendChild(img);
}

const randomImgPosition = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100

    return {x, y}
}

function catchCar() {
    incresePoints()
    this.classList.add("caught")
    setTimeout(() => this.remove(), 1000);
    addCars()
}

const incresePoints = () => {
    let currPoints = parseInt(score.innerHTML)
    currPoints++
    score.innerHTML = currPoints    
}

const showMessage = () => {
    const message = document.querySelector(".play__message")
    message.style.display = "block"
    setTimeout(() => message.style.transform = "translateY(10px)", 1000);
}

const addCars = () => {
    setTimeout(createCars, 500);
	setTimeout(createCars, 1000);
}