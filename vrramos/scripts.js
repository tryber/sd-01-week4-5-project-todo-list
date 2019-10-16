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
    
    function inserirInputComEnter() {
        let input = pegarElemento('#entrada-tarefa')
        input.addEventListener('keyup', function(e){
            if (e.which == 13) {
                
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
        
        selecionarTarefa(li)  
        tarefaCompletada(li)      
    }
    
    function selecionarTarefa(itemAdicionado) {
        itemAdicionado.addEventListener('click', function(){
            let liId = document.getElementById('selecionado')            
            
            if (liId) {
                removerId(liId)
            } 
            colocarId(itemAdicionado)            
        })        
    } 
    
    function colocarId(itemId) {
        itemId.setAttribute("id", "selecionado")
    }
    
    function removerId(itemId) {
        itemId.setAttribute("id", "")
    }    
    
    function tarefaCompletada(itemAdicionado) {
        itemAdicionado.addEventListener('dblclick', function(){
            if (itemAdicionado.style.textDecoration == "line-through"){
                itemAdicionado.style.textDecoration = "none"
            } else {
                itemAdicionado.style.textDecoration = "line-through"
            }                             
        }) 
    }


    criandoListaOl()
    ativarBotao()
    inserirInputComEnter()
}
