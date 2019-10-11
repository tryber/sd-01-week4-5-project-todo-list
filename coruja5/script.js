//o codigo esta incompleto mas estou com dúvida em um ponto primordial 




let tag = document.getElementsByTagName("ol")[0];
let textoInput = document.getElementById("adicionar-tarefa");
let gerarLista = document.getElementsByClassName("estilo-botoes")[0];
let indice = 0;

gerarLista.addEventListener('click', function() {
    let lista = '<li>' + textoInput.value + '</li>';    //o ponto que estou em dúvida é em relação a esta prática
    tag.innerHTML += lista;                             //posso realizar desta forma ou é um método inapropriado ?    
    textoInput.value = '';                  
    textoInput.focus();
    gerarClasse();
});

function gerarClasse() {
    let adicionar = document.getElementsByTagName("li")[indice];
    adicionar.className = "lista-de-tarefas";
    indice++;
}

