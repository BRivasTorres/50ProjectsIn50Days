const cars = document.querySelectorAll(".cars__car");
const wrapperChoose = document.querySelector(".wrapper__choose");
const wrapperPlay = document.querySelector(".wrapper__play");

cars.forEach((car, idx) => {
    car.addEventListener("click", () => {
        console.log("clicked")
        wrapperChoose.classList.add("up")
        wrapperPlay.classList.remove("down")
    })
})

