var selected;

function createItem() {
    let userInput = document.getElementById("userInput").value
    let orderedlist = document.getElementById("list")

    let listItem = document.createElement('li')
    orderedlist.appendChild(listItem);

    listItem.className = 'item';
    listItem.textContent = userInput
    listItem.addEventListener("click", function() {
        selectItem(listItem)
    })
    listItem.addEventListener("dblclick", function() {
        crossOutItem(listItem)
    })
}


function selectItem(listItem) {
    let allItems = document.getElementsByClassName("item")
    for(let index = 0; index < allItems.length; index++) {
        allItems[index].style.background = "";
    }
    listItem.style.background = "lightgrey";
    selected = listItem;
}

function crossOutItem(listItem) {
    if(listItem.style.textDecoration){
        listItem.style.textDecoration = "";
        listItem.style.color = "";
    }else{
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "lightslategray";
    }
}