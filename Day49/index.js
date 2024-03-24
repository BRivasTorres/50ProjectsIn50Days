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
        updateTaskState()
    }
}

function createTodoTask() {
    const tasks = document.createElement("div");
	tasks.classList.add("form__tasks");
	tasks.innerHTML = tempTodoVal;

	todoForm.appendChild(tasks);
}

function clearInput() {
    let inputForm = document.querySelector(".form__input") 
    inputForm.value = ""
}

const updateTaskState = () => {
    const tasks = document.querySelectorAll(".form__tasks")
    tasks.forEach((task) => {
		task.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			console.log("Clic derecho en la tarea:", task.textContent);
		});

		task.addEventListener("click", (e) => {
			console.log("Clic izquierdo en la tarea:", task.textContent);
		});
	});
}
