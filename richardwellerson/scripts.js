
function textCap() {
    let addTaskbtn = document.querySelector(".addTask");
    addTaskbtn.addEventListener("click", function () {
        let readyTask = document.querySelector(".taskText").value
        return readyTask;

    }
    )
}

function orderedList() {
    let genOrdList = document.createElement("ol");
    let divAdd = document.querySelector(".receiveOl");
    divAdd.appendChild(genOrdList)

}

function liInsert() {
    let genLiValue = document.createElement("li");
}


textCap()
orderedList()


//         for (let line = 0; line < valorRecebido; line++) {
//             let linha = document.createElement("tr");
//             let tabelaChamar = document.getElementsByClassName("tbljs")[0];
//             tabelaChamar.appendChild(linha);
//                 for (let cell = 0; cell < valorRecebido; cell++) {
//                     let celula = document.createElement("td");
