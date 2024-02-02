const boxesWrapper = document.querySelector(".main__img")
const btn = document.querySelector(".main__button")

btn.addEventListener('click', () => boxesWrapper.classList.toggle('big'))

const createBoxes = () => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
        boxesWrapper.appendChild(box)
      }
    }
}
createBoxes()