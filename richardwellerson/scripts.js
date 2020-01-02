function textCap() {
    let addTaskButton = document.querySelector(".add-task");
    addTaskButton.addEventListener("click", function () {
        liInsert();
    });
}

function liInsert() {
    let liTagCreation = document.createElement("li");
    let readyTask = document.querySelector(".task-text").value;
    const father = document.querySelector("ol");
    father.appendChild(liTagCreation);
    movingTask(liTagCreation);
    selectTask(liTagCreation);
    completeTask(liTagCreation);
    removeSelected(liTagCreation);
    removeCompleted(liTagCreation);
    liTagCreation.textContent = readyTask;
    document.querySelector(".task-text").value = '';
}

function cleenTasks() {
    let captureOlTag = document.querySelector("ol");
    let captureLiTag = document.getElementsByTagName("li");
    let buttonClear = document.querySelector(".clear-all");
    buttonClear.addEventListener("click", function () {
        for (i = 0; i < captureLiTag.length; i) {
            captureOlTag.removeChild(captureLiTag[0]);
        }
    });
}

const selectTask = (event) => {
    event.addEventListener("click", () => {
        if (event.style.color !== "green") {
            event.style.color = "green";
        } else {
            event.style.color = "black";
        }
    });
}

const completeTask = (event) => {
    event.addEventListener("dblclick", () => {
        if (event.style.textDecoration !== "line-through") {
            event.style.textDecoration = "line-through";
        } else {
            event.style.textDecoration = "none";
        }
    });
}

const removeSelected = (event) => {
    const olTag = document.querySelector("ol");
    const clearSelectedButton = document.querySelector(".remove-selected");
    clearSelectedButton.addEventListener("click", () => {
        if (event.style.color == "green") {
            olTag.removeChild(event);
        }
    });
}

const removeCompleted = (event) => {
    const olTag = document.querySelector("ol");
    const clearCompletedButton = document.querySelector(".remove-completed");
    clearCompletedButton.addEventListener("click", () => {
        if (event.style.textDecoration == "line-through") {
            olTag.removeChild(event);
        }
    });
}

const movingTask = (tag) => {
    const father = document.querySelector("ol");
    const upButton = document.querySelector(".up-move");
    const downButton = document.querySelector(".down-move");
    upButton.addEventListener("click", () => {
        if (tag.style.color === "green") {
            father.insertBefore(tag, tag.previousElementSibling)
        }
    })
    downButton.addEventListener("click", () => {
        if (tag.style.color === "green") {
            if (tag === father.lastChild) {
                father.insertBefore(tag, father.firstElementChild)
            } else {
                father.insertBefore(tag.nextElementSibling, tag)
            }
        }
    })
}

const saveTasks = () => {
    const saveButton = document.querySelector(".save-content");
    let tasks = document.getElementsByTagName("li");
    let keyToLocalStorage = 0;
    saveButton.addEventListener("click", () => {
        for (let task of tasks) {
            localStorage.setItem(`${keyToLocalStorage}`,`${task.textContent}`)
            keyToLocalStorage++
        }
    })
}

textCap()
cleenTasks()
saveTasks()
