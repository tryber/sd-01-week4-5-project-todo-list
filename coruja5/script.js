let tag = document.getElementsByTagName("ol")[0];
let textoInput = document.getElementById("adicionar-tarefa");
let gerarLista = document.getElementsByClassName("estilo-botoes")[0];
let removerLista = document.getElementsByClassName("estilo-botoes")[2];
let removerSelecionados = document.getElementsByClassName("estilo-botoes")[1];
let indice = 0;

gerarLista.addEventListener('click', function gerarLista() {
    let lista = '<li>' + textoInput.value + '</li>';    
    tag.innerHTML += lista;                                
    textoInput.value = '';                  
    textoInput.focus();
    gerarClasse();
});

function gerarClasse() {
    let adicionar = document.getElementsByTagName("li")[indice];
    adicionar.className = "lista-de-tarefas";
    indice++;
    let adicionar2 = document.getElementsByTagName("li");
    for (let recebendo of adicionar2) {
        recebendo.addEventListener('click', function() {
            if(recebendo.setAttribute("id", "selecionado")){
                recebendo.removeAttribute("id", "selecionado");
            }
            else {
                recebendo.setAttribute("id", "selecionado");
            }
        })
        recebendo.addEventListener('dblclick', function() {
            recebendo.setAttribute("class", "item-selecionado");
        })
        removerSelecionados.addEventListener('click', function() {
            recebendo.removeAttribute("class", "item-selecionado");
        })  
    }
}

removerLista.addEventListener('click', function() {
    while(tag.firstChild) {
        tag.firstChild.remove();
    }
})
