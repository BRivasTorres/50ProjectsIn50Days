let botons = document.querySelectorAll(".btn")
let audios = document.querySelectorAll("audio")

botons.forEach(boton => 
    boton.addEventListener("click", () => {
        searchAudio(boton.classList[0])
    })    
)

const searchAudio = (botonPressed) => {
    audios.forEach(audio => {
        if(audio.classList.contains(botonPressed)) {
            audio.play()
        }
    })
    
}