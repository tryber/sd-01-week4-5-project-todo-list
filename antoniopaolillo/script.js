var tarefaSelecionada, todosElementos, proximoElemento;
var elementoPai = document.getElementsByClassName('containerOl')[0];

function adicionarTarefa() {
    let nomeTarefa = document.getElementById('inputtxt');
    let nomeTarefaValue = nomeTarefa.value;
    let novoElemento = document.createElement('li');

    if (nomeTarefaValue != "") {
        novoElemento.setAttribute("class", "tarefa");
        novoElemento.innerHTML = nomeTarefaValue;

        elementoPai.appendChild(novoElemento);
        nomeTarefa.value = "";

        marcarELementoCompleto(novoElemento)
        selecionarElemento(novoElemento);
    } else {
        alert("Faltou o nome, amigão!")
    }
}

function marcarELementoCompleto(novoElemento) {
    novoElemento.addEventListener('dblclick', function () {
        if (novoElemento.style.textDecoration == "line-through") {
            novoElemento.style.textDecoration = "none";
        } else {
            novoElemento.style.textDecoration = "line-through";
        }
    })

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

    for (let i = numeroDeTarefas; i >= 0; i--) {
        let elemento = document.getElementsByClassName('tarefa')[i];
        elementoPai.removeChild(elemento);
    }
}

function apagarElementosCompletos() {
    todosElementos = document.getElementsByTagName('li').length - 1;
    let elementoCompleto;

    for (let i = todosElementos; i >= 0; i--) {
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
        //guardando a informação do textDecoration para ser carregada
        if (lista[i].style.textDecoration) {
            localStorage.setItem('completo' + i, 1)
        } else {
            localStorage.setItem('completo' + i, 0)
        }
    }
}

function mostrarListaSalva() {
    let tamanhoLocalStorage = localStorage.length / 2;
    let criarLi;
    for (let i = 0; i < tamanhoLocalStorage; i++) {
        criarLi = document.createElement('li');
        criarLi.setAttribute("class", "tarefa");
        criarLi.innerHTML = localStorage['lista' + i];
        elementoPai.appendChild(criarLi);
        selecionarElemento(criarLi);
        marcarELementoCompleto(criarLi);

        //adicionando o textDecoration às tarefas que o tinham
        if (localStorage['completo' + i] == "1") {
            criarLi.style.textDecoration = "line-through";
        }
    }
}

mostrarListaSalva();

