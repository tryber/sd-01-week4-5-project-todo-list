function apagar(id) {
    id.remove()
}   

function limparCompleto(){
    let pai = document.querySelector("#lista")
    //aqui foi a forma de pegar como se fosse uma pilha (usar o - para pegar decrescendo)
    let itensCriados = document.getElementsByTagName('li').length - 1
    let itensFeitos, i
    for (i = itensCriados; i >= 0; i--) {
        itensFeitos = document.getElementsByTagName('li')[i]
        if (itensFeitos.style.textDecoration == "line-through") {
        pai.removeChild(itensFeitos);
        }
        
    } 
} 

function irParaBaixo() {
    let papai = document.querySelector("#lista")
    let itemQueEstaAbaixo = selecionado.nextElementSibling
    papai.insertBefore(itemQueEstaAbaixo, selecionado)
}

function irParaCima() {
    let oPai = document.querySelector("#lista")
    let itemQueEstaAcima = selecionado.previousElementSibling
    oPai.insertBefore(selecionado, itemQueEstaAcima)
}

function adicionarElemento (item, pai) { 
    item.setAttribute("class", "listaItens")
    pai.appendChild(item)
    
}

function adcionarTexto(item, palavra) {
    item.insertAdjacentHTML('afterbegin', palavra)
}

function colocarId(itemId) {
    itemId.setAttribute("id", "selecionado")
    
}

function removerId(itemId) {
    itemId.setAttribute("id", "")
}

function escutarEventoClick(itemAdcionado) {
    itemAdcionado.addEventListener("click", function(){
        let idAnterior = document.getElementById('selecionado')
        if (idAnterior) {
            removerId(idAnterior)   
        } 
        colocarId(itemAdcionado)
        selecionado = itemAdcionado
    })       
}


function escutarEventoDblClick(itemAdcionado) {
    itemAdcionado.addEventListener("dblclick", function(){
        if (itemAdcionado.style.textDecoration == "line-through") {
            itemAdcionado.style.textDecoration = "none"
        } else {
            itemAdcionado.style.textDecoration = "line-through"
        }
    })
}

function minhaFunction(){
    let caixaTexto = document.getElementById("caixaTexto")
    let listaPai = document.querySelector("#lista")
    let itemNovo = document.createElement("li")
    let listaDosItens = caixaTexto.value
    adicionarElemento (itemNovo, listaPai)
    adcionarTexto(itemNovo, listaDosItens)
    escutarEventoDblClick(itemNovo)
    escutarEventoClick(itemNovo)
    caixaTexto.value = ""
}