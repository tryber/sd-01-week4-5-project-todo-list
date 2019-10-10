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
    listItems = document.querySelectorAll(".list-item");
    let clickCount = 0;
        orderedList.lastChild.addEventListener("click", function() {
                let itemClassName = this.className;
                if( itemClassName=="list-item" ) {
                    this.className+=" active";
                } else if ( itemClassName=="list-item active" ) {
                    this.className="list-item active complete";
                }
                else if ( itemClassName=="list-item active complete" ) {
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
        completeTasks.remove()
    });
}
btnRemove();