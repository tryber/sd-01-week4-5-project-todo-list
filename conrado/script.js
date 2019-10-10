window.onload = function () {
    let btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        addLiShowTask();
    })

    function addLiShowTask(){
        let li = createElement();
        let showTask = document.getElementById('task');
        showTask.appendChild(li);
        let inputTask = document.getElementById('inputTask');
        li.innerHTML = inputTask.value;
        inputTask.value = "";
    }
    function createElement(){
        let createDiv = document.createElement('li');
        return createDiv;
    }
}
