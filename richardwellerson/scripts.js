let buttonClear = document.getElementById("clear-all")

function textCap() {
    let addTaskButton = document.querySelector(".add-task")
    addTaskButton.addEventListener("click", function () {
        liInsert()
    })
}

function orderedList() {
    let genOrdList = document.createElement("ol")
    let divAdd = document.querySelector(".receive-ol")
    divAdd.appendChild(genOrdList)
}

function liInsert() {
    let genLiValue = document.createElement("li")
    let readyTask = document.querySelector(".task-text").value
    let capOl = document.getElementsByTagName("ol")[0]
    capOl.appendChild(genLiValue)
    genLiValue.textContent = readyTask
}

function cleenTasks() {
    let captureOlTag = document.querySelector("ol")
    let captureLiTag = document.getElementsByTagName("li")
    buttonClear.addEventListener("click", function () {
        for (i = 0; i < captureLiTag.length; i) {
            captureOlTag.removeChild(captureLiTag[0])
        }
    })
}

let selectTask = () => {
    let arrayTask = document.getElementsByTagName("li")
    for (let i = 0; i < arrayTask.length; i++) {
        arrayTask[i].addEventListener("click", () => {
            arrayTask[i].style.color = "green"
        })
    }
}

textCap()
orderedList()
cleenTasks()
selectTask()