var tarefaSelecionada;
var todosElementos;
var proximoElemento;
var elementoPai = document.getElementsByClassName('containerOl')[0];

function adicionarTarefa() {
    let nomeTarefa = document.getElementById('inputtxt');
    let nomeTarefaValue = nomeTarefa.value;
    let novoElemento = document.createElement('li');

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
        let elementoAntigo = document.getElementById('tarefaSelecionada');
        if (elementoAntigo) {
            elementoAntigo.setAttribute("id", "");
        }
        novoElemento.setAttribute("id", "tarefaSelecionada");
        tarefaSelecionada = novoElemento;
    })
}

function apagarTodosElementos() {
    let numeroDeTarefas = document.getElementsByClassName('tarefa').length - 1;

    for (let i = numeroDeTarefas; i > -1; i--) {
        let elemento = document.getElementsByClassName('tarefa')[i];
        elementoPai.removeChild(elemento);
    }
}

function apagarElementosCompletos() {
    todosElementos = document.getElementsByTagName('li').length - 1;
    let elementoCompleto;

    for (let i = todosElementos; i > -1; i--) {
        elementoCompleto = document.getElementsByTagName('li')[i];
        if (elementoCompleto.style.textDecoration == "line-through") {
            elementoPai.removeChild(elementoCompleto);
        }
    }
}

function apagarElementoSelecionado() {
    elementoPai.removeChild(tarefaSelecionada);
}

function subirElemento() {
    proximoElemento = tarefaSelecionada.previousElementSibling;
    elementoPai.insertBefore(tarefaSelecionada, proximoElemento);
}

function descerElemento() {
    proximoElemento = tarefaSelecionada.nextElementSibling;
    elementoPai.insertBefore(proximoElemento, tarefaSelecionada);
}

function salvarLista() {
    localStorage.clear();
    todosElementos = document.getElementsByTagName('li').length;
    let lista = [];
    for (let i = 0; i < todosElementos; i++) {
        lista[i] = document.getElementsByTagName('li')[i];
        localStorage.setItem('lista' + i, lista[i].innerHTML)
    }
}

function mostrarListaSalva() {
    let tamanhoLocalStorage = localStorage.length;
    let criarLi;
    for (let i = 0; i < tamanhoLocalStorage; i++) {
        criarLi = document.createElement('li');
        criarLi.setAttribute("class", "tarefa");
        criarLi.innerHTML = localStorage['lista' + i];
        elementoPai.appendChild(criarLi);
    }
}

mostrarListaSalva();

