window.onload = function() {
reloadList();
addClickBtnInput(returnById('btn-input'));
addClickBtnExcluir(returnById('btn-excluir-ALL'));
addClickBtnExcluirItem(returnById('btn-excluir-item'));
addClickBtnExcluirCompletos(returnById('btn-excluir-completos'));
addClickBtnSave(returnById('btn-salvar'));
addClickBtnDown(returnById('btn-down'));
addClickBtnUP(returnById('btn-up'));


function addClickBtnUP(element){
    element.addEventListener('click', function(){
        moveUp(returnById('select'));
    })
}

function addClickBtnDown(element){
    element.addEventListener('click', function(){
        moveDown(returnById('select'));
    })
}



function moveUp(element){
    if(element){
        let elementFather = element.parentNode;
        elementFather.insertBefore(element, element.previousElementSibling);
    }
}

function moveDown(element){
    if(element){
        let elementFather = element.parentNode;
        if( element == elementFather.lastChild ){
            elementFather.insertBefore( element, elementFather.firstElementChild ); 
        }else{
            elementFather.insertBefore(element.nextElementSibling, element ); 
        }
    }
}



function saveList(){
    localStorage.clear();
    let list = returnByTagName('li') ;
    let position;
    for ( position = 0; position < list.length; position++ ){
        if( list[position].textContent != "" ){
            localStorage.setItem('list'+ position, list[position].textContent);
        }
        if ( list[position].className == "completed" ) {
            localStorage.setItem('completed' + position, 1);
        } else {
            localStorage.setItem('completed' + position, 0);
        }
    }
}

function reloadList(){
    let position;
    for( position = 0; position < localStorage.length/2 ; position++ ){
        let text=localStorage[ "list" + position] ;
        let elementFather = returnById('ol-list');
        let task=addTextTask(createLI(), text);
        if (localStorage['completed' + position] == "1") {
            markCompleted(task);
        }
        addElementInHTML(task, elementFather);
    }
}

function addClickBtnSave(btn){
    btn.addEventListener('click' , function (){
        saveList();
        
    })
}


function addClickBtnExcluirCompletos(btn){
    btn.addEventListener('click', function(){
        deleteCompleted();
    })
}

function addClickBtnExcluir(btn){
    btn.addEventListener('click', function(){
        deleteAllItem();
    })
}

function addClickBtnExcluirItem(btn){
    btn.addEventListener('click', function(){
        if(returnById('select')){
            deleteElement(returnById('select'));
        }
    })
}

function deleteAllItem(){
    let list=returnByTagName('li');
    let sizeList=list.length;
    let position;
    for( position = 0; position < sizeList; position++ ){
        deleteElement(list[0]);
    }
}

function deleteCompleted(){
    let list=returnByClassName('completed');
    let sizeList=list.length;
    let i;
    for( i=0; i<sizeList; i++ ){
        deleteElement(list[0]);
    }
    
}

function returnByClassName(name){
    let elements=document.getElementsByClassName(name);
    return elements;
}


function returnByTagName(name){
    let elements=document.getElementsByTagName(name);
    return elements;
}


function deleteElement(element){
    element.parentNode.removeChild(element);
}

function addClickMarkCompleted(element){
    element.addEventListener('dblclick', function(){
        markCompleted(this);
    })
}

function markCompleted(element){
    if( element.className != "completed" ){
        element.className = "completed";
    }else{
        element.className = "";
    }
}

function removeIdSelect(element){
    element.style.background = "";
    element.removeAttribute("id");
}


function addClickLiSelect(element){
    element.addEventListener('click', function(){
        if(returnById('select')){
            removeIdSelect(returnById('select'));
            this.id = "select";
            this.style.background = "#424C55";
        }else{
            this.id = "select";
            this.style.background = "#424C55";
        }
    })
}

function addClickBtnInput(element){
    element.addEventListener('click', function(){
        if( returnById('input-txt').value ){
            
            let elementFather = returnById( 'ol-list' );
            let textInput = returnById( 'input-txt' ).value;
            let taskLi = addTextTask(createLI(), textInput)
            addElementInHTML(taskLi, elementFather);
            returnById('input-txt').value = "";
        }
    })
}

function addElementInHTML(elementChild , elementFather){
    elementFather.appendChild(elementChild );
}

function addTextTask(element, txt){
    element.innerHTML = txt;
    addClickLiSelect(element);
    addClickMarkCompleted(element);
    return element;
}

function createLI(){
    let elementLi = document.createElement('li');
    return elementLi;
}

function returnById(id){
    let element = document.getElementById(id);
    return element;
}
}
