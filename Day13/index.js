let textArea = document.getElementById("choices-text")
let tags = document.getElementById("tags")

textArea.addEventListener("input", (e) => {
    tags.innerHTML = ""
    
    const tagsArray = textArea.value.split(",")
    let max = tagsArray.length
    
    tagsArray.forEach(tagText => {
        const tag = document.createElement("span")
        tag.textContent = tagText.trim()
        tags.appendChild(tag)
    });    
})

const aleatory = () => {
    let randomCurr = Math.round(Math.random() * max)
}

textArea.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        textArea.value = ""
    }
})
