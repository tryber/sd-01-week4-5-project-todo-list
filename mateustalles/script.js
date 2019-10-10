function recoverLocalStorage() {
    window.addEventListener("load", function(){
        let inputText = document.getElementById("input-text");
        for (let i = 0; i < localStorage.length/2 ; i++) {    
            let newListItem = document.createElement("li")
            newListItem.className=localStorage.getItem(i+".className")
            newListItem.innerHTML=localStorage.getItem(i);
            let orderedList = document.querySelector(".ordered-list")
            orderedList.appendChild(newListItem);
            inputText.focus();
            selectionCompletion(orderedList)
        }
    })
}
recoverLocalStorage();

function createItem(){
    let inputSubmit = document.getElementById("input-submit");
    let inputText = document.getElementById("input-text");
    inputSubmit.addEventListener("click", function() {
        let newListItem = document.createElement("li")
        newListItem.className="list-item"
        newListItem.innerHTML=inputText.value;
        let orderedList = document.querySelector(".ordered-list")
        orderedList.appendChild(newListItem);
        inputText.value="";
        inputText.focus();
        selectionCompletion(orderedList);
    });
}
createItem();

function selectionCompletion(orderedList) {
    let clickCount = 0;
        orderedList.lastChild.addEventListener("click", function() {
                let itemClassName = this.className;
                if( itemClassName=="list-item" ) {
                    if(!!document.querySelector("[class$='active']")) {
                        let itemAtivo = document.querySelector("[class$='active']")
                        itemAtivo.className="list-item"
                    }
                    this.className+=" active";
                } else if ( itemClassName=="list-item active" ) {
                    this.className="list-item active complete";
                }
                else if ( itemClassName=="list-item active complete" ) {
                    clickCount++
                    this.className="list-item active complete selected";
                }
                else if ( itemClassName=="list-item active complete selected" ) {
                    clickCount++
                    if (clickCount==2) {
                        this.className="list-item"
                        clickCount=0;
                    }
                    let clickTimeout = setTimeout(function(){ 
                        clickCount = 0; 
                        clearTimeout(clickTimeout)
                    }, 1000);
            }
        });
}

function btnRemove() {
    let btnRemove = document.getElementById("btn-remove");
    btnRemove.addEventListener("click", function() {
        let orderedList = document.querySelector(".ordered-list");
        let listContainer = document.querySelector(".list-container");
        let newList = document.createElement("ol");
        newList.className="ordered-list";
        orderedList.remove();
        listContainer.appendChild(newList);        
    });

    let btnRemoveComplete = document.getElementById("btn-remove-complete");
    btnRemoveComplete.addEventListener("click", function() {
        let completeTasks = document.querySelectorAll("[class$='complete']");
        for (tasks of completeTasks) {
            tasks.remove()
        }
    });
}
btnRemove();

function btnSave() {
    let btnSave = document.getElementById("btn-save");
    btnSave.addEventListener("click", function(){
            if( !!document.querySelectorAll(".list-item") )  {
                let listItems = document.querySelectorAll(".list-item");
                //let listItemsChildren = listItems.childNodes;
                for (item of listItems) {
                    var itemIndex = Array.prototype.indexOf.call(listItems, item);
                    localStorage.setItem(itemIndex, item.innerHTML);
                    localStorage.setItem(itemIndex+".className", item.className);

                }
            }
        })
    }
btnSave()

function btnEraseMemory() {
    let btnEraseMemory = document.getElementById("btn-erase-memory");
    btnEraseMemory.addEventListener("click", function(){
    localStorage.clear()
    });
}
btnEraseMemory();

function moveUp() {
    let btnMoveUp = document.getElementById("btn-moveup");
    btnMoveUp.addEventListener("click", function() {
        let itemMove = document.querySelector("[class$='active']");
        itemMove.parentNode.insertBefore(itemMove, itemMove.previousSibling);
    })
}
function moveDown() {
    let btnMoveUp = document.getElementById("btn-movedown");
    btnMoveUp.addEventListener("click", function() {
        let itemMove = document.querySelector("[class$='active']");
        if (!(!!itemMove.nextSibling)){
            let listItems = document.querySelectorAll(".list-item");
            itemMove.parentNode.insertBefore(itemMove, listItems[0]);
        }else{
            itemMove.parentNode.insertBefore(itemMove, itemMove.nextSibling.nextSibling);
        }
    })
}
function moveSelectedListItem(){
    moveUp();
    moveDown();
}
moveSelectedListItem();

function removeSelected(){
    let btnEraseSelected = document.getElementById("btn-erase-selected");
    btnEraseSelected.addEventListener("click", function() {
        let listItems = document.querySelectorAll(".list-item");
        let itemSelecionado = document.querySelector("[class$='active']");
       // let itemCompletoSelecionado = document.querySelector("[class$='selected']");
        var itemIndex = Array.prototype.indexOf.call(listItems, itemSelecionado);
        localStorage.removeItem(itemIndex);
        localStorage.removeItem(itemIndex+".className");
        itemSelecionado.remove();
       // itemCompletoSelecionado.remove();
    });
}
removeSelected();
