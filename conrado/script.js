window.onload = function () {
    let btn = document.getElementById("btn")
    btn.addEventListener("click", function () {
        createElement(showTask());
    })
    function showTask() {
        inputTask = document.getElementById('inputTask').value;
        let showTask = document.getElementById('task');
        showTask.innerHTML = inputTask;
    }
    function createElement(){
        let createDiv = document.createElement('li');
        return createDiv;
    }
}
