var ind = -1;
function listSize(){
    ind += 1
    var item = document.createElement("li");
    var span = document.createElement("span")
    item.appendChild(span)
    document.getElementById("main-list").appendChild(item);
    span.className = "item";
    span.id = "item" + ind
    span.innerHTML = document.getElementById("main-input").value
    removeText()
    selectclick(span)
    markclick(span)
}
function removeText(){
    document.getElementById("main-input").value = "";
}
var count = 0;
function selectclick(span){
    span.addEventListener("click", function(){
        count += 1;
        if ((count == 1) && (this.id !== "selected-item")){
            reviewSelect()
            this.id = "selected-item"
        }
        else if ((count == 1) && (this.id == "selected-item")){
            reviewSelect()
        }   
        else if ((count == 2) && (this.id !== "selected-item")){
            reviewSelect()
            this.id = "selected-item"
            count = 0;
        }
        else if ((count == 2) && (this.id == "selected-item")){
            reviewSelect()
            count = 0;
        }
    })
}

function reviewSelect(){
    var olditem = document.getElementById("selected-item")
    for (i = 0; i < document.getElementById("main-list").childElementCount; i++){
        if (document.getElementById("main-list").childNodes[i].firstChild.id == "selected-item"){
            olditem.id = "item" + i
        }
    }
}
var count0 = 0
function markclick(item){ 
    item.addEventListener("dblclick", function(){
        count0 += 1
        if ((count0 == 1) && (this.className !== "marked-item")){
            this.className = "marked-item"
        }
        else if ((count0 == 1) && (this.className == "marked-item")){
            this.className = "item"
        }   
        else if ((count0 == 2) && (this.className !== "marked-item")){
            this.className = "marked-item"
            count0 = 0;
        }
        else if ((count0 == 2) && (this.className == "marked-item")){
            this.className = "item"
            count0 = 0;
        }
    })
}

function clean(){
    for (i = 0; i < document.getElementById("main-list").childElementCount; i++){
        var remove = document.getElementById("main-list").childNodes[i]
        document.getElementById("main-list").removeChild(remove)
        i = -1;
    }
}

function cleanDone(){
    for (i = 0; i < document.getElementById("main-list").childElementCount; i++){
        var remove = document.getElementById("main-list").childNodes[i].firstChild
        var father = document.getElementById("main-list").childNodes[i]
        if (remove.className == "marked-item"){
            document.getElementById("main-list").removeChild(father)
            i = -1;
        }
    }
}

function mouseHouver(){
    for(i = 0; i < document.getElementsByClassName("button").length; i++){
        document.getElementsByClassName("button")[i].addEventListener("mouseover", function(){
            this.style.backgroundColor = "red"
        })
        document.getElementsByClassName("button")[i].addEventListener("mouseout", function(){
            this.style.backgroundColor = "blue"
        })
    }
}

function saveList(){
    for (i = 0; i < document.getElementById("main-list").childElementCount; i++){
        var keyitem = "listitem" + i
        var keyclassName = "listclass" + i
        var keyid = "listid" + i
        var content = document.getElementById("main-list").childNodes[i].firstChild.innerHTML
        var classname = document.getElementById("main-list").childNodes[i].firstChild.className
        var id = document.getElementById("main-list").childNodes[i].firstChild.id
        localStorage.setItem(keyitem, content)
        localStorage.setItem(keyclassName, classname)
        localStorage.setItem(keyid, id)
    }
}

function getList(){
    for (i = 0; i < localStorage.length/3; i++){
        var keyitem = "listitem" + i
        var keyclassName = "listclass" + i
        var keyid = "listid" + i
        var item = document.createElement("li");
        var span = document.createElement("span");
        item.appendChild(span);
        document.getElementById("main-list").appendChild(item);
        span.className = localStorage.getItem(keyclassName)
        span.id = localStorage.getItem(keyid)
        span.innerHTML = localStorage.getItem(keyitem)
    }
}

function removeSaved(){
    var limit = localStorage.length/3
    for (i = 0; i <= limit; i++){
        var keyitem = "listitem" + i
        var keyclassName = "listclass" + i
        var keyid = "listid" + i
        localStorage.removeItem(keyitem)
        localStorage.removeItem(keyclassName)
        localStorage.removeItem(keyid)
    }
}

function moveItensUp(){
    var list = document.getElementById("main-list");
    for (i = 0; i < document.getElementById("main-list").childElementCount; i++){
        if (document.getElementById("main-list").childNodes[i].firstChild.id == "selected-item"){
            if (i == 0){
                var item = document.createElement("li");
                var span = document.createElement("span");
                item.appendChild(span)
                list.appendChild(item);
                span.className = list.childNodes[i].firstChild.className;
                span.innerHTML = document.getElementById("main-input").childNodes[i].firstChild.innerHTML
                list.removeChild(document.getElementById("main-input").childNodes[i])
            }
            else {
                list.insertBefore(list.childNodes[i], list.childNodes[i - 1]);
            }
        }
    }
}


window.onload = function () {
    mouseHouver()
    getList()
    removeSaved()
} 
