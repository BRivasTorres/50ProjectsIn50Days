let textArea = document.getElementById("choices-text")
let tags = document.getElementById("tags")

textArea.focus()

textArea.addEventListener("input", (e) => {
    tags.innerHTML = ""
    
    const tagsArray = textArea.value.split(",")
    let max = tagsArray.length
    
    tagsArray.forEach(tagText => {
        const tag = document.createElement("span")
        tag.classList.add("tag")
        tag.textContent = tagText.trim()
        tags.appendChild(tag)
    });    
})

textArea.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
        setTimeout(() => {
            e.target.value = ""
        }, 10);
            
        randomSelect()
    }
})

function randomSelect() {    
    const times = 30
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        
        if(randomTag !== null) {
            higlightTag(randomTag)
        }
        
        setTimeout(() => {
            unHiglightTag(randomTag)
        }, 100);
    }, 100);
    
    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            setTimeout(() => {
                const randomTag = pickRandomTag()
                higlightTag(randomTag)
            }, 100);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}


function higlightTag(tag) {
    tag.classList.add("curr-choice")
    console.log(tag)
}

function unHiglightTag(tag) {
    tag.classList.remove("curr-choice")
    console.log(tag)
}