let buttonClear = document.getElementById("clear-all")

function textCap() {
    let addTaskbtn = document.querySelector(".addTask")
    addTaskbtn.addEventListener("click", function () {
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

function cleenTasks(){
    let captureOlTag = document.querySelector("ol")
    let captureLiTag = document.getElementsByTagName("li")
    buttonClear.addEventListener("click", function() {
        for(i = 0; i < captureLiTag.length;){
            captureOlTag.removeChild(captureLiTag[0])
        }
        })
}   

// function selectTask (){
//     let arrayTask = document.getElementsByTagName("li")
//     arrayTask.addEventListener("click", function(){
//         for(i = 0; i < arrayTask.length; i++){
//             let backgroundValue = getComputedStyle(arrayTask[i]).getPropertyValue("background-color")
//             console.log(backgroundValue)
//         }
//     })
// }

textCap()
orderedList()
cleenTasks()
// selectTask ()