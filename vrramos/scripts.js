window.onload = function(){
    
    function ativarBotao() {
        let btn
        
        btn = document.querySelector('#botao-adicionar-tarefa')
        btn.addEventListener('click', function(){
            
            adicionarTarefa()
            
        })
    }
    function pegarElemento(elemento){
        return document.querySelector(elemento)
    }
    
    function criarElemento(elemento) {
        return document.createElement(elemento)
    }
    
    function adicionarElemento(elementoPai, elementoFilho) {
        return elementoPai.appendChild(elementoFilho)
    }
    
    function adicionarTarefa() {        
        let i, ol, li, listaTarefas, inputTarefa       
        
        ol = criarElemento('ol')
        listaTarefas = pegarElemento('#lista-de-tarefas')
        adicionarElemento(listaTarefas,ol)
        
        for( i = 0; i < 1; i++){
            inputTarefa = pegarElemento('#entrada-tarefa').value        
            li = criarElemento('li')                 
            adicionarElemento(ol,li)        
            li.textContent= inputTarefa
        }
    }
    
    ativarBotao()
}