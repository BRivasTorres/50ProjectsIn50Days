const addBtn = document.querySelector(".wrapper__add")
const wrapper = document.querySelector(".wrapper")

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes) {
    notes.forEach(note => createCart(note))
}

addBtn.addEventListener("click", () => {
    createCart()
    const editBtns = document.querySelectorAll(".btns__edit");
    editBtns.forEach((btn,id) => {
        btn.addEventListener("click", () => {
            handleEdit(id)
        });
    })
    
    const deleteBtns = document.querySelectorAll(".btns__delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nodeToDelete = btn.closest(".note")
            nodeToDelete.remove()
            up()
        })
    })
})
   
const handleEdit = (i) => {
    const texts = document.querySelectorAll(".note__text");
	const arr = [...texts];
    arr[i].toggleAttribute("readOnly")
}

function createCart(text = "") {
    let cart = document.createElement("div")
    let textArea = document.querySelectorAll(".note__text")
    cart.classList.add("note");
    cart.innerHTML = `
        <div class="note__btns">
            <button class="btns__edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btns__delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <textarea name="text" id="text" cols="30" rows="10" class="note__text">${text}</textarea>
    `;
    textArea.forEach(text => text.addEventListener("input", () => up()))
    wrapper.appendChild(cart)
}

const up = () => {
    const texts = document.querySelectorAll(".note__text")
    let notes = []
    
    texts.forEach(note => notes.push(note.value))
    
    localStorage.setItem("notes", JSON.stringify(notes))
}