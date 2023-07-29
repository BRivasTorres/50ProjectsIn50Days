let btnJokes = document.getElementById("btn") 
let jokeEl = document.getElementById("jokes")

btnJokes.addEventListener("click", generateJoke)

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()
  jokeEl.innerHTML = data.joke
}