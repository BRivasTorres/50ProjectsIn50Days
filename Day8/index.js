let lettersEmail = document.querySelectorAll("#span-email")
let inputEmail = document.querySelector(".input-email")

inputEmail.addEventListener("focus", () => {
    lettersEmail.forEach(letter => {
        letter.classList.add("animation-letters")
        console.log(letter)
    })
})
