let textArea = document.getElementById("choices-text")
let tags = document.getElementById("tags")

textArea.addEventListener("input", (e) => {
    tags.innerHTML = ""
    
    const tagsArray = textArea.value.split(",")
    
    tagsArray.forEach(tagText => {
        const tag = document.createElement("span")
        tag.textContent = tagText.trim()
        tags.appendChild(tag)
    });
    
})

textArea.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        textArea.value = ""
    }
})