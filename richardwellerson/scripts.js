
function textCap() {
    let addTaskbtn = document.querySelector(".addTask")
    addTaskbtn.addEventListener("click", function () {
    liInsert()
    })
}

function orderedList() {
    let genOrdList = document.createElement("ol")
    let divAdd = document.querySelector(".receiveOl")
    divAdd.appendChild(genOrdList)
}

function liInsert() {
    let genLiValue = document.createElement("li")
    let readyTask = document.querySelector(".taskText").value
    let capOl = document.getElementsByTagName("ol")[0]
    capOl.appendChild(genLiValue)
    genLiValue.textContent = readyTask
}

function cleenTasks(){
    let btnClear = document.querySelector(".cleanAll")
    let captureLiTag = document.querySelectorAll("li")
    let captureOlTag = document.getElementsByTagName("ol")
    btnClean.addEventListener("click", function() {
        for(i of captureLiTag){
            
        }
        })
}   

textCap()
orderedList()