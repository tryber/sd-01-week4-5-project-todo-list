function botaoAdicionar() {
    let nomeTarefa = document.getElementById('inputtxt');
    let nomeTarefaValue = nomeTarefa.value;
    let novoElemento = document.createElement('li');
    let elementoPai = document.getElementsByClassName('containerOl')[0];

    novoElemento.setAttribute("class", "tarefa");
    novoElemento.innerHTML = nomeTarefaValue;

    elementoPai.appendChild(novoElemento);
    nomeTarefa.value = "";

    novoElemento.addEventListener('dblclick', function () {
        if (novoElemento.style.textDecoration == "line-through") {
            novoElemento.style.textDecoration = "none";
        } else {
            novoElemento.style.textDecoration = "line-through";
        }
    })

}


