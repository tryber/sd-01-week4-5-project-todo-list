window.onload = () => {
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            const father = document.querySelector("ol");
            let convertString = new DOMParser().parseFromString(`${localStorage[i]}`, "text/html")
            let tag = convertString.body.firstChild;
            father.appendChild(tag)
            movingTask(tag);
            selectTask(tag);
            completeTask(tag);
            removeSelected(tag);
            removeCompleted(tag)
        }
    }
}

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
        localStorage.clear();
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
            event.style.color = "black"
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
        } else {
            return 0;
        }
    })
    downButton.addEventListener("click", () => {
        if (tag.style.color === "green") {
            if (tag === father.lastChild) {
                father.insertBefore(tag, father.firstElementChild)
            } else {
                father.insertBefore(tag.nextElementSibling, tag)
            }
        } else {
            return 0;
        }
    })
}

const saveTasks = () => {
    const saveButton = document.querySelector(".save-content");
    let tasks = document.getElementsByTagName("li");
    saveButton.addEventListener("click", () => {
        if (localStorage.length > 0) {
            localStorage.clear()
        }
        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i].outerHTML;
            localStorage.setItem(`${i}`, `${task}`)
        }
    })
}

textCap()
cleenTasks()
saveTasks()
