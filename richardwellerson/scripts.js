function textCap() {
    let addTaskButton = document.querySelector(".add-task");
    addTaskButton.addEventListener("click", function () {
        liInsert();
    });
}

function orderedList() {
    let genOrdList = document.createElement("ol");
    let divAdd = document.querySelector(".receive-ol");
    divAdd.appendChild(genOrdList);
}

function liInsert() {
    let genLiValue = document.createElement("li");
    selectTask(genLiValue);
    completeTask(genLiValue);
    let readyTask = document.querySelector(".task-text").value;
    let capOl = document.getElementsByTagName("ol")[0];
    capOl.appendChild(genLiValue);
    genLiValue.textContent = readyTask;
    document.querySelector(".task-text").value = '';
}

function cleenTasks() {
    let captureOlTag = document.querySelector("ol");
    let captureLiTag = document.getElementsByTagName("li");
    let buttonClear = document.getElementById("clear-all");
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
            event.style.textDecoration = "none"
        }
    })
}

textCap()
orderedList()
cleenTasks()