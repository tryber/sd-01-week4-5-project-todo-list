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
    const allItems = document.getElementsByClassName("item")
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
    const listItems = document.getElementsByClassName("item");
    for (let index = 0; index < listItems.length; index++) {
        if (listItems[index].style.textDecoration) {
            listItems[index].remove();
            index = -1;
        }
    }
}

function deleteAll() {
    const orderedlist = document.getElementById("list");
    while (orderedlist.firstChild) {
        orderedlist.firstChild.remove();
    }
}

function deleteSelected() {
    selected.remove()
}

function saveList() {
    localStorage.clear();
    const allItems = document.getElementsByClassName("item");
    let list = [];
    for (let index = 0; index < allItems.length; index++) {
        list[index] = document.getElementsByTagName('li')[index];
        localStorage.setItem('list' + index, list[index].innerHTML)

        if (list[index].style.textDecoration) {
            localStorage.setItem('completed' + index, 1)
        } else {
            localStorage.setItem('completed' + index, 0)
        }
    }
}

function showSavedList() {
    const localStorageSize = localStorage.length / 2;
    const orderedlist = document.getElementById("list");

    for (let index = 0; index < localStorageSize; index++) {
        let listItem = document.createElement('li')
        orderedlist.appendChild(listItem);
        listItem.className = 'item';
        listItem.textContent = localStorage['list' + index];
        
        listItem.addEventListener("click", function () {
            selectItem(listItem)
        })
        listItem.addEventListener("dblclick", function () {
            completeItem(listItem)
        })

        if (localStorage['completed' + index] == "1") {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "lightslategray";
        }
    }
}

window.onload = showSavedList