var botaoSelecionado;
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
    selecionarElemento(novoElemento);
}

function selecionarElemento(novoElemento) {
    novoElemento.addEventListener('click', function () {
        let elementoAntigo = document.getElementById('botaoselecionado');
        if (elementoAntigo) {
            elementoAntigo.setAttribute("id", "");
        }
        novoElemento.setAttribute("id", "botaoselecionado");
        botaoSelecionado = novoElemento;
    })
}

function apagarTodosElementos() {
    let elementoPai = document.getElementsByClassName('containerOl')[0];
    let numeroDeTarefas = document.getElementsByClassName('tarefa').length - 1;

    for (let i = numeroDeTarefas; i > -1; i--) {
        let elemento = document.getElementsByClassName('tarefa')[i];
        elementoPai.removeChild(elemento);
    }

}

function apagarElementoCompletos() {
    let todosElementos = document.getElementsByTagName('li').length - 1;
    let elementoPai = document.getElementsByClassName('containerOl')[0];
    let elementoCompleto;

    for (let i = todosElementos; i > -1; i--) {
        elementoCompleto = document.getElementsByTagName('li')[i];
        if (elementoCompleto.style.textDecoration == "line-through") {
            elementoPai.removeChild(elementoCompleto);
        }
    }

}



