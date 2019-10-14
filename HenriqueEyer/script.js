window.onload = function() {
    reloadList();
    addClickInputBtn(returnById('new-task-btn'));
    addClickDeleteBtn(returnById('btn-delete-ALL'));
    addClickDeleteItemBtn(returnById('btn-delete-item'));
    addClickDeleteCompletesBtn(returnById('btn-delete-completes'));
    addClickSaveBtn(returnById('btn-save'));
    addClickDownBtn(returnById('btn-down'));
    addClickUpBtn(returnById('btn-up'));
    addClickConfirmBtn(returnById('btn-confirm'));
    addClickCancelBtn(returnById('btn-cancel'));
    
    function addClickUpBtn(element) {
        element.addEventListener('click', function() {
            moveUp(returnById('select'));
        })
    }
    
    function addClickDownBtn(element) {
        element.addEventListener('click', function() {
            moveDown(returnById('select'));
        })
    }
    
    function moveUp(element) {
        if(element) {
            let elementFather = element.parentNode;
            elementFather.insertBefore(element, element.previousElementSibling);
        }
    }
    
    function moveDown(element) {
        if(element) {
            let elementFather = element.parentNode;
            if(element == elementFather.lastChild) {
                elementFather.insertBefore(element, elementFather.firstElementChild); 
            } else {
                elementFather.insertBefore(element.nextElementSibling, element); 
            }
        }
    }
    
    function reduceTam(string) {
        if(string.length > 30) {
            return string.substring(0,30) + "...";
        } else {
            return string;
        }
        
    }
    
    function showSaveTasks(task,status,number) {
        
        let textTask = addTextTask(createItem("td"), reduceTam(task));
        let lineTaskStatus = addTextTask(createItem("td"), status);
        let indiceTask = addTextTask(createItem("td"), number);
        let row=createItem("tr");
        let elementFather = returnById('feedbackSave');
        addElementInHTML(indiceTask,row);
        addElementInHTML(textTask,row);
        addElementInHTML(lineTaskStatus,row);
        addElementInHTML(row,elementFather);
        returnById('feedback').style.visibility="visible";
    }
    
    function removeTaskSaves() {
        let tasks = returnByTagName('td');
        let sizeTasks = tasks.length;
        let position;
        for(position = 0; position < sizeTasks; position++) {
            deleteElement(tasks[0]);
        }
    }
    
    function saveList() {
        let list = returnByTagName('li');
        let position;
        for (position = 0; position < list.length; position++) { 
            if (list[position].className == "completed") {
                showSaveTasks(list[position].textContent, "C",(position+1));
            } else {
                showSaveTasks(list[position].textContent, "INC",(position+1));
            }
            
        }
    }
    
    function sendLocalStorage() {
        localStorage.clear();
        let list = returnByTagName('li');
        let position;
        for (position = 0; position < list.length; position++) {
            if(list[position].textContent != "") {
                localStorage.setItem('item'+ position, list[position].textContent);
            }
            if (list[position].className == "completed") {
                localStorage.setItem('completed' + position, 1);
            } else {
                localStorage.setItem('completed' + position, 0);
            }
            
        }
    }
    
    function reloadList() {
        let position;
        for(position = 0; position < localStorage.length/2; position++) {
            let text = localStorage[ "item" + position] ;
            let elementFather = returnById('ol-list');
            let task = addTextTask(createItem("li"), text);
            if (localStorage['completed' + position] == "1") {
                markCompleted(task);
            }
            addElementInHTML(task, elementFather);
        }
    }
    
    function addClickSaveBtn(btn) {
        btn.addEventListener('click' , function () {
            disableAllMainBtn();
            saveList();    
        })
    }
    
    function addClickDeleteCompletesBtn(btn) {
        btn.addEventListener('click', function() {
            deleteCompleted();
        })
    }
    
    function addClickDeleteBtn(btn) {
        btn.addEventListener('click', function() {
            deleteAllItem();
        })
    }
    
    function addClickDeleteItemBtn(btn) {
        btn.addEventListener('click', function() {
            if(returnById('select')) {
                deleteElement(returnById('select'));
            }
        })
    }
    
    function deleteAllItem() {
        let list = returnByTagName('li');
        let sizeList = list.length;
        let position;
        for(position = 0; position < sizeList; position++) {
            deleteElement(list[0]);
        }
    }
    
    function deleteCompleted() {
        let list = returnByClassName('completed');
        let sizeList = list.length;
        let i;
        for(i = 0; i<sizeList; i++) {
            deleteElement(list[0]);
        }  
    }
    
    function returnByClassName(name) {
        return  document.getElementsByClassName(name);
    }
    
    function returnByTagName(name) {
        return document.getElementsByTagName(name);
    }
    
    function deleteElement(element) {
        element.parentNode.removeChild(element);
    }
    
    function addClickMarkCompleted(element) {
        element.addEventListener('dblclick', function() {
            markCompleted(this);
        })
    }
    
    function markCompleted(element) {
        if(element.className != "completed") {
            element.className = "completed";
        } else {
            element.className = "";
        }
    }
    
    function removeIdSelect(element) {
        element.style.background = "";
        element.removeAttribute("id");
    }
    
    function addClickLiSelect(element) {
        element.addEventListener('click', function() {
            if(returnById('select')) {
                removeIdSelect(returnById('select'));
                this.id = "select";
                this.style.background = "#424C55";
            } else {
                this.id = "select";
                this.style.background = "#424C55";
            }
        })
    }
    
    function disableAllMainBtn() {
        for(let indice of returnByClassName('btn-main')) {
            disableElement(indice);
        } 
    }
    
    function addClickCancelBtn(element){
        element.addEventListener('click', function() {
            feedbackBtn();
        })
    }
    
    function feedbackBtn(){
        returnById('feedback').style.visibility="hidden";
        disableAllMainBtn();
        removeTaskSaves();
    }
    
    function addClickConfirmBtn(element) {
        element.addEventListener('click', function() {
            sendLocalStorage();
            feedbackBtn();
        })
    }
    
    function addClickInputBtn(element) {
        element.addEventListener('click', function() {
            if(returnById('new-task-input').value) {
                let elementFather = returnById('ol-list');
                let textInput = returnById('new-task-input').value;
                let taskLi = addTextTask(createItem("li"), textInput);
                addElementInHTML(taskLi, elementFather);
                returnById('new-task-input').value = "";
            }
        })
    }
    
    function addElementInHTML(elementChild , elementFather) {
        elementFather.appendChild(elementChild);
    }
    
    function addTextTask(element, txt) {
        element.innerHTML = txt;
        addClickLiSelect(element);
        addClickMarkCompleted(element);
        return element;
    }
    
    function createItem(tag) {
        return document.createElement(tag);
    }
    
    
    function returnById(id) {
        return document.getElementById(id);
    }
    
    function disableElement(element) {
        if(element.disabled==false){
            element.disabled= true;
        } else {
            element.disabled= false;
        }
        
    }
}
