reloadList();
addClickBtnInput(returnById('btn_input'));
addClickBtnExcluir(returnById('btn_excluir_ALL'))
addClickBtnExcluirItem(returnById('btn_excluir_item'))
addClickBtnExcluirCompletos(returnById('btn_excluir_completos'))
addClickBtnSave(returnById('btn_salvar'))
addClickBtnDown(returnById('btn_down'))
addClickBtnUP(returnById('btn_up'))


function addClickBtnUP(element){
    element.addEventListener('click',function(){
        moveUp(returnById('select'))
    })
}

function addClickBtnDown(element){
    element.addEventListener('click',function(){
        moveDown(returnById('select'))
    })
}



function moveUp(element){
    if(element){
        let item_pai=element.parentNode;
        item_pai.insertBefore(element,element.previousElementSibling);
    }
}

function moveDown(element){
    if(element){
        let item_pai=element.parentNode;
        if(element==item_pai.lastChild){
            item_pai.insertBefore(element,item_pai.firstElementChild); 
        }else{
            item_pai.insertBefore(element.nextElementSibling,element); 
        }
    }
}



function saveList(){
    localStorage.clear();
    let list = returnByTagName('li') 
    let i;
    let text;
    for (i=0;i<list.length;i++){
        if(list[i].textContent!=""){
            localStorage.setItem('list'+i,list[i].textContent);
        }
    }
}

function reloadList(){
    let i;
    for(i=0;i<localStorage.length;i++){
        let text=localStorage["list"+i];
        let elementFather =returnById('ol_list')
        let task=addTextTask(createLI(),text)
        addElementInHTML(task,elementFather);
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
            deleteElement(returnById('select'))
        }
    })
}

function deleteAllItem(){
    let list=returnByTagName('li');
    let size_list=list.length;
    let i;
    for(i=0;i<size_list;i++){
        deleteElement(list[0]);
    }
}

function deleteCompleted(){
    let list=returnByClassName('completed');
    let size_list=list.length;
    let i;
    for(i=0;i<size_list;i++){
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
        markCompleted(this)
    })
}

function markCompleted(element){
    if(element.className!="completed"){
        element.className="completed"
    }else{
        element.className="";
    }
}

function removeIdSelect(element){
    element.style.background="";
    element.removeAttribute("id");
}


function addClickLiSelect(element){
    element.addEventListener('click', function(){
        if(returnById('select')){
            removeIdSelect(returnById('select'));
            this.id="select";
            this.style.background="#424C55";
        }else{
            this.id="select";
            this.style.background="#424C55";
        }
    })
}

function addClickBtnInput(element){
    element.addEventListener('click',function(){
        if(returnById('input_txt').value){
            
            let elementFather =returnById('ol_list')
            let textInput=returnById('input_txt').value;
            let taskLi=addTextTask(createLI(),textInput)
            addElementInHTML(taskLi,elementFather);
            returnById('input_txt').value="";
        }
    })
}

function addElementInHTML(elementfilho,elementpai){
    elementpai.appendChild(elementfilho);
}

function addTextTask(element,txt){
    element.innerHTML=txt;
    addClickLiSelect(element);
    addClickMarkCompleted(element);
    return element;
}

function createLI(){
    let item_li=document.createElement('li');
    return item_li;
}

function returnById(id){
    let element = document.getElementById(id);
    return element;
}
