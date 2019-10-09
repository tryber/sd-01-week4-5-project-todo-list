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
        if (count0 == 1){
            this.className = "marked-item"
        }
        if (count0 == 2){
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