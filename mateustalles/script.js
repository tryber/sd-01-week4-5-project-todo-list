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
        selectionCompletion();
    });
}
createItem();

function selectionCompletion() {
    let listItems = document.querySelectorAll(".list-item");
    console.log(listItems)
    for (item of listItems) {
        item.addEventListener("click", function() {
            console.log(this)
            let itemClassName = this.className;
            if( !itemClassName.includes("active") ) {
                this.className+=" active";
            } else {
                this.className+=" complete";
            }
        });
    }
}
