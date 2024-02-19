const rangeValue = document.querySelector(".range__value");
const rangeInput = document.querySelector(".range__input");

rangeInput.addEventListener("input", (e) => {
    const val = e.target.value
    rangeValue.innerHTML = val
    rangeValue.style.left = `${val}%`;
})