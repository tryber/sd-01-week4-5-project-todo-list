// Search Elements Html
function searchElements() {
    var list = document.getElementById("main-list");
    var input = document.getElementById("main-input");
    var oldElement = document.getElementById("selected-item");
    var buttons = document.getElementsByClassName("button");
    return [list, input, oldElement, buttons]
}

// Add item on ordenaded list
var ind = -1;

function addItem() {
    ind += 1
    var element = searchElements();
    var item = document.createElement("li");
    var span = document.createElement("span");
    item.appendChild(span);
    element[0].appendChild(item);
    span.className = "item";
    span.id = "item" + ind;
    span.innerHTML = element[1].value;
    element[1].value = "";
    selectclick(span);

    markclick(span)
}

// Event Click
var countSelectClick = 0;
function selectclick(span) {
    span.addEventListener("click", function () {
        countSelectClick += 1;
        if ((countSelectClick == 1) && (this.id !== "selected-item")) {
            reviewSelect()
            this.id = "selected-item"
        }
        else if ((countSelectClick == 1) && (this.id == "selected-item")) {
            reviewSelect()
        }
        else if ((countSelectClick == 2) && (this.id !== "selected-item")) {
            reviewSelect()
            this.id = "selected-item"
            countSelectClick = 0;
        }
        else if ((countSelectClick == 2) && (this.id == "selected-item")) {
            reviewSelect()
            countSelectClick = 0;
        }
    })
}

// Erase some others selections
function reviewSelect() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++) {
        if (element[0].childNodes[i].firstChild.id == "selected-item") {
            element[2].id = "item" + i
        }
    }
}

// Mark done itens
var countMarkClick = 0
function markclick(item) {
    item.addEventListener("dblclick", function () {
        countMarkClick += 1
        if ((countMarkClick == 1) && (this.className !== "marked-item")) {
            this.className = "marked-item";
        }
        else if ((countMarkClick == 1) && (this.className == "marked-item")) {
            this.className = "item";
        }
        else if ((countMarkClick == 2) && (this.className !== "marked-item")) {
            this.className = "marked-item";
            countMarkClick = 0;
        }
        else if ((countMarkClick == 2) && (this.className == "marked-item")) {
            this.className = "item";
            countMarkClick = 0;
        }
    })
}

// Erase List Button 
function clean() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++) {
        var remove = element[0].childNodes[i];
        element[0].removeChild(remove);
        i = -1;
    }
}

// Erase Done Button
function cleanDone() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++) {
        var remove = element[0].childNodes[i].firstChild;
        var father = element[0].childNodes[i];
        if (remove.className == "marked-item") {
            element[0].removeChild(father);
            i = -1;
        }
    }
}

// Save List
function saveList() {
    var element = searchElements();
    for (i = 0; i < element[0].childElementCount; i++) {
        var keyitem = "listitem" + i;
        var keyclassName = "listclass" + i;
        var keyid = "listid" + i;
        var content = element[0].childNodes[i].firstChild.innerHTML;
        var classname = element[0].childNodes[i].firstChild.className;
        var id = element[0].childNodes[i].firstChild.id;
        localStorage.setItem(keyitem, content);
        localStorage.setItem(keyclassName, classname);
        localStorage.setItem(keyid, id);
    }
}

// Get lsit after loading page
function getList() {
    var element = searchElements();
    for (i = 0; i < localStorage.length / 3; i++) {
        var keyitem = "listitem" + i
        var keyclassName = "listclass" + i
        var keyid = "listid" + i
        var item = document.createElement("li");
        var span = document.createElement("span");
        item.appendChild(span);
        element[0].appendChild(item);
        span.className = localStorage.getItem(keyclassName)
        span.id = localStorage.getItem(keyid)
        span.innerHTML = localStorage.getItem(keyitem)
    }
}

// After loading page, itens will be removed from the save list, for save, please press the button saveS list again
function removeSaved() {
    var limit = localStorage.length / 3
    for (i = 0; i <= limit; i++) {
        var keyitem = "listitem" + i
        var keyclassName = "listclass" + i
        var keyid = "listid" + i
        localStorage.removeItem(keyitem)
        localStorage.removeItem(keyclassName)
        localStorage.removeItem(keyid)
    }
}

// Move Up
function moveItensUp() {
    var element = searchElements();
    var numElement = element[0].childElementCount;
    for (i = 0; i < numElement; i++) {
        if (element[0].childNodes[i].firstChild.id == "selected-item") {
            if (i == 0) {
                element[0].insertBefore(element[0].childNodes[i], element[0].childNodes[numElement]);
                element[0].insertBefore(element[0].childNodes[numElement], element[0].childNodes[numElement - 1]);
                break
            }
            else {
                element[0].insertBefore(element[0].childNodes[i], element[0].childNodes[i - 1]);
            }
        }
    }
}

// Erase Selected
function cleanSelected() {
    var element = searchElements();
    var numElement = element[0].childElementCount;
    for (i = 0; i < numElement; i++) {
        if (element[0].childNodes[i].firstChild.id == "selected-item") {
            element[0].removeChild(element[0].childNodes[i])
            break
        }
    }
}


// Move Down
function moveItensDown() {
    var element = searchElements();
    var numElement = element[0].childElementCount;
    var array = new Array();
    var count = 0;
    for (i = 0; i < numElement; i++) {
        if (element[0].childNodes[i].firstChild.id == "selected-item") {
            if (i !== (element[0].childElementCount - 1)){
                for (l = i; l < element[0].childElementCount; l++) {
                    array[count] = element[0][l]
                    count += 1
                    element[0].removeChild(element[0][l]);
                }
                element[0].appendChild(array[1]);
                element[0].appendChild(array[0]);
                for (i = 2; i < array.length; i++){
                    element[0].appendChild(array[i])
                }
            }
        }
    }
}

// Mouse Hover
function mouseHouver() {
    var element = searchElements();
    for (i = 0; i < element[3].length; i++) {
        element[3][i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#DF2935";
        })
        element[3][i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "red";
        })
    }
}

window.onload = function () {
    mouseHouver()
    getList()
    removeSaved()
} 
