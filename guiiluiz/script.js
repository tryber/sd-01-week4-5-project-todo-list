var selected;

function createItem() {
    let userInput = document.getElementById("userInput")
    const orderedlist = document.getElementById("list");

    let listItem = document.createElement('li')
    orderedlist.appendChild(listItem);

    listItem.className = 'item';
    listItem.textContent = userInput.value;
    listItem.addEventListener("click", function () {
        selectItem(listItem)
    })
    listItem.addEventListener("dblclick", function () {
        completeItem(listItem)
    })

    userInput.value = "";
}

function selectItem(listItem) {
    let allItems = document.getElementsByClassName("item")
    for (let index = 0; index < allItems.length; index++) {
        allItems[index].style.background = "";
    }
    listItem.style.background = "lightgrey";
    selected = listItem;
}

function completeItem(listItem) {
    if (listItem.style.textDecoration) {
        listItem.style.textDecoration = "";
        listItem.style.color = "";
    } else {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "lightslategray";
    }
}

function deleteCompleted() {
    let listItems = document.getElementsByClassName("item");
    for (let index = 0; index < listItems.length; index++) {
        if(listItems[index].style.textDecoration){
            listItems[index].remove();
            index = -1;
        }
    }
}

function deleteAll() {
    const orderedlist = document.getElementById("list"); // Estou repetindo essa variavel em todas as funções porque quando tentei declará-la fora não funcionou.
    while (orderedlist.firstChild) {
        orderedlist.firstChild.remove();
    }
}