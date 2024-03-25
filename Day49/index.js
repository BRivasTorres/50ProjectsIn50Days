const todoForm = document.querySelector(".main__form");
const inputForm = document.querySelector(".form__input")

let tempTodoVal = ""

inputForm.addEventListener("input", (e) => tempTodoVal = e.target.value )
todoForm.addEventListener("submit", handleSubmitForm)

function handleSubmitForm(e) {
    e.preventDefault();
    if (tempTodoVal.length > 0) {
        createTodoTask(tempTodoVal);
        clearInput();
    }
}

function createTodoTask() {
    const task = document.createElement("li");
	task.classList.add("form__tasks");
	task.innerHTML = tempTodoVal;
     
    updateTaskState(task)
	todoForm.appendChild(task);
}

function clearInput() {
    let inputForm = document.querySelector(".form__input") 
    inputForm.value = ""
}

const updateTaskState = (task) => {
    if(task) {
        task.addEventListener("click", () => {
            task.classList.toggle("completed");
        });
        
        task.addEventListener("contextmenu", (e) => {
            e.preventDefault()
            task.remove()
        });
    }
}
