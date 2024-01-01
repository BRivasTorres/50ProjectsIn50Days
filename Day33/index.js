const addBtn = document.querySelector(".wrapper__add")
const wrapper = document.querySelector(".wrapper")


addBtn.addEventListener("click", () => {
        
    let cart = document.createElement("div")
    cart.classList.add("note");
    cart.innerHTML = `
        <div class="note__btns">
            <button class="btns__edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btns__delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <textarea name="text" id="text" cols="30" rows="10" class="note__text"></textarea>
    `;
    wrapper.appendChild(cart)
    
    
    const editBtns = document.querySelectorAll(".btns__edit");
    editBtns.forEach((btn,id) => btn.addEventListener("click", () => handleEdit(id)))
    
    const deleteBtns = document.querySelectorAll(".btns__delete");
    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const nodeToDelete = btn.closest(".note")
            nodeToDelete.remove()
        })
    })
})
   
const handleEdit = (i) => {
    const texts = document.querySelectorAll(".note__text");
	const arr = [...texts];
    if(arr[i].readOnly === true) {
        arr[i].readOnly = false
    } else  {
        arr[i].readOnly = true
    }
}