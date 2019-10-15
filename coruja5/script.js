let tag = document.getElementsByTagName("ol")[0];
let textoInput = document.getElementById("adicionar-tarefa");
let gerarLista = document.getElementsByClassName("estilo-botoes")[0];
let removerLista = document.getElementsByClassName("estilo-botoes")[2];
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
}

removerLista.addEventListener('click', function() {
    while(tag.firstChild) {
    tag.firstChild.remove();
    }
})

itemSelecionado.addEventListener('dblclick', function() {
    let itemSelecionado = document.getElementsByClassName("lista-de-tarefas")[0];
    itemSelecionado.className = 'item-selecionado';
})