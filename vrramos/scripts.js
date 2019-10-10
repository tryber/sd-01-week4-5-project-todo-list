window.onload = function() {
    
    function ativarBotao() {
        let btn;
        
        btn = document.querySelector('#botao-adicionar-tarefa')
        btn.addEventListener('click', function() {
            
            adicionarTarefa()
            
        })
    }

    function pegarElemento(elemento) {
        return document.querySelector(elemento)
    }
    
    function criarElemento(elemento) {
        return document.createElement(elemento)
    }
    
    function adicionarElemento(elementoPai, elementoFilho) {
        return elementoPai.appendChild(elementoFilho)
    }

    function inserirComEnter() {
       let input = pegarElemento('#entrada-tarefa')
       input.addEventListener('keyup', function(e){
           if (e.KeyCode == 13) {
               adicionarTarefa()
           }
       })
    }
    
    function criandoListaOl() {      
        let ol, listaTarefas    
        
        ol = criarElemento('ol')
        listaTarefas = pegarElemento('#lista-de-tarefas')
        adicionarElemento(listaTarefas,ol)     
        ol.classList.add('lista-ordenada')                                    
    }    
    
    function adicionarTarefa() {        
        let ol, li, inputTarefa       
        
        ol = pegarElemento('.lista-ordenada')
        inputTarefa = pegarElemento('#entrada-tarefa').value        
        li = criarElemento('li')                
        adicionarElemento(ol,li)        
        li.textContent = inputTarefa        
    }
    
    criandoListaOl()
    ativarBotao()
    inserirComEnter()
}