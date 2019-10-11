//criar tag ol e li para fazer uma listagem de elementos
//função click terá que ativar este elemento
//tenho que fazer um createElement para criar sempre um li

let tag = document.getElementsByTagName("ol")[0];
let textoInput = document.getElementById("adicionar-tarefa");
let gerarLista = document.getElementsByClassName("estilo-botoes")[0];
let indice = 0;

gerarLista.addEventListener('click', function() {
    let lista = '<li>' + textoInput.value + '</li>';
    tag.innerHTML += lista;
    textoInput.value = '';
    textoInput.focus();
    gerarClasse();
});

function gerarClasse() {
    let adicionar = document.getElementsByTagName("li")[indice]
    adicionar.className = "lista-de-tarefas"
    indice++
}
