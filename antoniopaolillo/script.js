var tarefaSelecionada, numeroDeTarefas, proximaTarefa;
var elementoPai = document.getElementsByClassName('containerOl')[0];

function adicionarTarefa() {
    let tarefaInserida = document.getElementById('inputtxt');
    let nomeTarefaInserida = tarefaInserida.value;
    let novaTarefa = document.createElement('li');

    if (nomeTarefaInserida != "") {
        novaTarefa.setAttribute("class", "tarefa");
        novaTarefa.innerHTML = nomeTarefaInserida;

        elementoPai.appendChild(novaTarefa);
        tarefaInserida.value = "";

        marcarTarefaCompleta(novaTarefa);
        selecionarTarefa(novaTarefa);
    } else {
        alert("Faltou o nome, amigão!")
    }
}

function marcarTarefaCompleta(novaTarefa) {
    novaTarefa.addEventListener('dblclick', function () {
        if (novaTarefa.style.textDecoration == "line-through") {
            novaTarefa.style.textDecoration = "none";
        } else {
            novaTarefa.style.textDecoration = "line-through";
        }
    })

}

function selecionarTarefa(novaTarefa) {
    novaTarefa.addEventListener('click', function () {
        let antigaTarefaSelecionada = document.getElementById('tarefaSelecionada');
        if (antigaTarefaSelecionada) {
            antigaTarefaSelecionada.setAttribute("id", "");
        }
        novaTarefa.setAttribute("id", "tarefaSelecionada");
        tarefaSelecionada = novaTarefa;
    })
}

function apagarTodasTarefas() {
    let numeroDeTarefas = document.getElementsByClassName('tarefa').length;

    for (let i = numeroDeTarefas - 1; i >= 0; i--) {
        let tarefa = document.getElementsByClassName('tarefa')[i];
        elementoPai.removeChild(tarefa);
    }
}

function apagarTarefasCompletas() {
    let numeroDeTarefas = document.getElementsByTagName('li').length;
    let tarefaCompleta;

    for (let i = numeroDeTarefas - 1; i >= 0; i--) {
        tarefaCompleta = document.getElementsByTagName('li')[i];
        if (tarefaCompleta.style.textDecoration == "line-through") {
            elementoPai.removeChild(tarefaCompleta);
        }
    }
}

function apagarTarefaSelecionada() {
    elementoPai.removeChild(tarefaSelecionada);
}

function subirTarefa() {
    proximaTarefa = tarefaSelecionada.previousElementSibling;
    elementoPai.insertBefore(tarefaSelecionada, proximaTarefa);
}

function descerTarefa() {
    proximaTarefa = tarefaSelecionada.nextElementSibling;
    if (proximaTarefa) {
        elementoPai.insertBefore(proximaTarefa, tarefaSelecionada);
    } else {
        let primeiraTarefa = elementoPai.firstElementChild;
        elementoPai.insertBefore(tarefaSelecionada, primeiraTarefa);
    }
}

function salvarLista() {
    localStorage.clear();
    todosElementos = document.getElementsByTagName('li').length;
    let lista = [];
    for (let i = 0; i < todosElementos; i++) {
        lista[i] = document.getElementsByTagName('li')[i];
        localStorage.setItem('lista' + i, lista[i].innerHTML);
        //guardando a informação do textDecoration para ser carregada
        if (lista[i].style.textDecoration) {
            localStorage.setItem('completo' + i, 1);
        } else {
            localStorage.setItem('completo' + i, 0);
        }
    }
}

function mostrarListaSalva() {
    //localStorage.length dividido por 2 pois há 2 valores guardados, e eles são percorridos pela chave
    let quantidadeTarefasSalvas = localStorage.length / 2;
    let tarefa;
    for (let i = 0; i < quantidadeTarefasSalvas; i++) {
        tarefa = document.createElement('li');
        tarefa.setAttribute("class", "tarefa");
        tarefa.innerHTML = localStorage['lista' + i];
        elementoPai.appendChild(tarefa);
        selecionarTarefa(tarefa);
        marcarTarefaCompleta(tarefa);

        //adicionando o textDecoration às tarefas que o tinham
        if (localStorage['completo' + i] == "1") {
            tarefa.style.textDecoration = "line-through";
        }
    }
}

mostrarListaSalva();

