let textArea = document.getElementById("choices-text")

textArea.addEventListener("input", (e) => {
    let textValue = textArea.value
    console.log(textValue.split(""))
})
