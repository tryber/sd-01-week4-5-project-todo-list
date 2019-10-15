let orderedList = document.querySelector(".ordered-list");
let inputText = document.getElementById("input-text");
let itemIndex;

window.addEventListener("load", function() {
    recoverLocalStorage();
    createItem();
    buttonRemoveAllAndComplete();
    buttonEraseMemory();
    buttonSave()
    buttonMoveUp();
    buttonMoveDown();
    buttonRemoveSelected();
    buttonRemoveSelectedListOnly();
});

function recoverLocalStorage() {
    let newListItem;
    for (let i = 0; i < localStorage.length/2 ; i++) {    
        newListItem = document.createElement("li");
        newListItem.className = localStorage.getItem(i+".className");
        newListItem.innerHTML = localStorage.getItem(i);
        addToList(orderedList,newListItem);
    };
};

function createItem(){
    let inputSubmit = document.getElementById("input-submit");
    let newListItem;
    inputSubmit.addEventListener("click", function() {
        newListItem = document.createElement("li")
        newListItem.className = "list-item";
        newListItem.innerHTML = inputText.value;
        addToList(orderedList,newListItem);
    });
}

function addToList(list,newItem) {
    list.appendChild(newItem);
    inputText.focus();
    inputText.value = "";
    selectionPatterns(orderedList);
}

function selectionPatterns(list) {
    let clickCount = 0;
    list.lastChild.addEventListener("click", function() {
        let itemClassName = this.className;
        switch (itemClassName) {
        case "list-item" :
            checkForActive();
            this.className += " active";
            break;

        case "list-item active" :
            this.className = "list-item complete";
            break;

        case "list-item complete active" :
            this.className = "list-item complete";
            break;

        case "list-item complete" :
            clickCount++;
            checkForActive();
            this.className = "list-item complete active selected";
            let clickTimeout = setTimeout(function(){ 
                clickCount = 0; 
                document.querySelector(".list-item.complete.active.selected").className = "list-item complete active";
                clearTimeout(clickTimeout);
            }, 1000);
            break;

        case "list-item complete active selected" :
            clickCount++
            if (clickCount == 2) { 
                this.className = "list-item"
                clickCount = 0;
            };
            break;
        };
   });
   function checkForActive() {
        if ( list.contains(document.querySelector(".complete.active")) ) {
            let completeActiveItem = document.querySelector(".complete.active");
            completeActiveItem.className = "list-item complete";
        };
        if ( list.contains(document.querySelector(".list-item.active")) ) {
            let activeItem = document.querySelector(".list-item.active");
            activeItem.className = "list-item";
        };
    }
};

function buttonRemoveAllAndComplete() {
    let buttonRemoveAll = document.getElementById("button-remove");
    buttonRemoveAll.addEventListener("click", removeAllList);
    let buttonRemoveComplete = document.getElementById("button-remove-complete");
    buttonRemoveComplete.addEventListener("click", function() {
        let completeTasks = document.querySelectorAll("[class$='complete']");
        for (tasks of completeTasks) {
            tasks.remove();
        };
    });
};

function removeAllList () {
    let taskList = document.querySelectorAll(".list-item");
    for (let task of taskList) {
        task.remove();
    };
};

function buttonSave() {
    let buttonSave = document.getElementById("button-save");
    buttonSave.addEventListener("click", 
        refreshLocalStorage);
};

function refreshLocalStorage() {
    localStorage.clear();
    if( !!document.querySelectorAll(".list-item") )  {
        let listItems = document.querySelectorAll(".list-item");
        for (item of listItems) {
            itemIndex = Array.prototype.indexOf.call(listItems, item);
            localStorage.setItem(itemIndex, item.innerHTML);
            localStorage.setItem(itemIndex+".className", item.className);
        };
    };
};

function buttonEraseMemory() {
    let buttonEraseMemory = document.getElementById("button-erase-memory");
    buttonEraseMemory.addEventListener("click", function(){
    localStorage.clear()
    });
};

function buttonMoveUp() {
    let buttonMoveUp = document.getElementById("button-moveup");
    buttonMoveUp.addEventListener("click", function() {
        let itemMove = document.querySelector("[class$='active']");
        itemMove.parentNode.insertBefore(itemMove, itemMove.previousSibling);
    });
};

function buttonMoveDown() {
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

function buttonRemoveSelected(){
    let buttonEraseSelected = document.getElementById("button-erase-selected-local-storage");
    buttonEraseSelected.addEventListener("click", function() {
        let listItems = document.querySelectorAll(".list-item");
        let selectedItem = document.querySelector("[class*='active']");
        let itemIndex = Array.prototype.indexOf.call(listItems, selectedItem);
        localStorage.removeItem(itemIndex);
        localStorage.removeItem(itemIndex+".className");
        selectedItem.remove();
        refreshLocalStorage();
    });
};

function buttonRemoveSelectedListOnly() {
    let buttonEraseSelected = document.getElementById("button-erase-selected");
    buttonEraseSelected.addEventListener("click", function() {
        let selectedItem = document.querySelector("[class*='active']");
        selectedItem.remove();
    });
};
