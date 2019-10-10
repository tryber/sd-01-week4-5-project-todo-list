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
        selectionCompletion();
    });
}
createItem();

function selectionCompletion() {
    let listItems = document.querySelectorAll(".list-item");
    let clickCount = 0;
    for (item of listItems) {
        item.addEventListener("click", function() {
            let itemClassName = this.className;
            if( !itemClassName.includes("active") ) {
                this.className+=" active";
            } else {
                this.className+=" complete";
            }
            if ( itemClassName.includes("complete") ) {
                clickCount++
                if (clickCount==2) {
                    this.className="list-item"
                }
                let clickTimeout = setTimeout(function(){ 
                    clickCount = 0; 
                    console.log(clickCount) 
                    clearTimeout(clickTimeout)
                }, 2000);
            }
        });
    }
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
}
btnRemove();