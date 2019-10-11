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
        if (listItems[index].style.textDecoration) {
            listItems[index].remove();
            index = -1;
        }
    }
}

function deleteAll() {
    const orderedlist = document.getElementById("list");// Estou repetindo essa variavel em todas as funções porque quando tentei declará-la fora não funcionou.
    while (orderedlist.firstChild) {
        orderedlist.firstChild.remove();
    }
}

function deleteSelected() {
    selected.remove()
}

function saveList() {
    localStorage.clear();
    let allItems = document.getElementsByClassName("item");
    let list = [];
    for (let i = 0; i < allItems.length; i++) {
        list[i] = document.getElementsByTagName('li')[i];
        localStorage.setItem('list' + i, list[i].innerHTML)

        if (list[i].style.textDecoration) {
            localStorage.setItem('completed' + i, 1)
        } else {
            localStorage.setItem('completed' + i, 0)
        }
    }
}

function showSavedList() {
    let localStorageSize = localStorage.length / 2;
    const orderedlist = document.getElementById("list"); // Estou repetindo essa variavel em todas as funções porque quando tentei declará-la fora não funcionou.

    for (let i = 0; i < localStorageSize; i++) {
        let listItem = document.createElement('li')
        orderedlist.appendChild(listItem);
        listItem.className = 'item';
        listItem.textContent = localStorage['list' + i];
        
        listItem.addEventListener("click", function () {
            selectItem(listItem)
        })
        listItem.addEventListener("dblclick", function () {
            completeItem(listItem)
        })

        if (localStorage['completed' + i] == "1") {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "lightslategray";
        }
    }
}

window.onload = showSavedList