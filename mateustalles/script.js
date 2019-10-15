let orderedList = document.querySelector(".ordered-list");
let inputText = document.getElementById("input-text");

window.addEventListener("load", function() {
    recoverLocalStorage();
    createItem();
    buttonRemove();
    buttonEraseMemory();
    buttonSave()
    moveUp();
    moveDown();
    removeSelected();
});

function recoverLocalStorage() {
    let newListItem;
    for (let i = 0; i < localStorage.length/2 ; i++) {    
        newListItem = document.createElement("li");
        newListItem.className=localStorage.getItem(i+".className");
        newListItem.innerHTML=localStorage.getItem(i);
        addToList(orderedList,newListItem);
    };
};

function createItem(){
    let inputSubmit = document.getElementById("input-submit");
    let newListItem;
    inputSubmit.addEventListener("click", function() {
        newListItem = document.createElement("li")
        newListItem.className="list-item"
        newListItem.innerHTML=inputText.value;
        addToList(orderedList,newListItem);
    });
}

function addToList(list,newItem) {
    list.appendChild(newItem);
    inputText.focus();
    inputText.value="";
    selectionPatterns(orderedList);

}

function selectionPatterns(list) {
    let clickCount = 0;
    list.lastChild.addEventListener("click", function() {
        let itemClassName = this.className;
        switch (itemClassName) {
        case "list-item" :
            if ( list.contains(document.querySelector("[class$='active']")) ) {
                let itemAtivo = document.querySelector("[class$='active']");
                itemAtivo.className = "list-item";
            };
            this.className += " active";
            break;
        case "list-item active" :
            this.className = "list-item active complete";
            break;
        case "list-item active complete" :
            clickCount++;
            this.className="list-item active complete selected";
            let clickTimeout = setTimeout(function(){ 
                clickCount = 0; 
                document.querySelector(".list-item.active.complete.selected").className = "list-item active complete";
                clearTimeout(clickTimeout)
            }, 1000);
            break;
        case "list-item active complete selected" :
            clickCount++
            if (clickCount==2) { 
                this.className="list-item"
                clickCount=0;
            };
            break;
        };
   });
};

function buttonRemove() {
    let buttonRemove = document.getElementById("button-remove");
    buttonRemove.addEventListener("click", function() {
        let orderedList = document.querySelector(".ordered-list");
        let listContainer = document.querySelector(".list-container");
        let newList = document.createElement("ol");
        newList.className="ordered-list";
        orderedList.remove();
        listContainer.appendChild(newList);        
    });
    let buttonRemoveComplete = document.getElementById("button-remove-complete");
    buttonRemoveComplete.addEventListener("click", function() {
        let completeTasks = document.querySelectorAll("[class$='complete']");
        for (tasks of completeTasks) {
            tasks.remove();
        };
    });
};

function buttonSave() {
    let buttonSave = document.getElementById("button-save");
    buttonSave.addEventListener("click", function(){
        if( !!document.querySelectorAll(".list-item") )  {
            let listItems = document.querySelectorAll(".list-item");
            let itemIndex;
            for (item of listItems) {
                itemIndex = Array.prototype.indexOf.call(listItems, item);
                localStorage.setItem(itemIndex, item.innerHTML);
                localStorage.setItem(itemIndex+".className", item.className);

            };
        };
    });
};

function buttonEraseMemory() {
    let buttonEraseMemory = document.getElementById("button-erase-memory");
    buttonEraseMemory.addEventListener("click", function(){
    localStorage.clear()
    });
}

function moveUp() {
    let buttonMoveUp = document.getElementById("button-moveup");
    buttonMoveUp.addEventListener("click", function() {
        let itemMove = document.querySelector("[class$='active']");
        itemMove.parentNode.insertBefore(itemMove, itemMove.previousSibling);
    });
};

function moveDown() {
    let buttonMoveUp = document.getElementById("button-movedown");
    buttonMoveUp.addEventListener("click", function() {
        let itemMove = document.querySelector("[class$='active']");
        if (!!itemMove.nextSibling) {
            itemMove.parentNode.insertBefore(itemMove, itemMove.nextSibling.nextSibling);
        } else {
            let listItems = document.querySelectorAll(".list-item");
            itemMove.parentNode.insertBefore(itemMove, listItems[0]);
        };
    });
};

function removeSelected(){
    let buttonEraseSelected = document.getElementById("button-erase-selected");
    buttonEraseSelected.addEventListener("click", function() {
        let listItems = document.querySelectorAll(".list-item");
        let itemSelecionado = document.querySelector("[class$='active']");
        var itemIndex = Array.prototype.indexOf.call(listItems, itemSelecionado);
        localStorage.removeItem(itemIndex);
        localStorage.removeItem(itemIndex+".className");
        itemSelecionado.remove();
    });
}
