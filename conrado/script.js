window.onload = function() {
  function printLocalStorage(){
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const myList = document.getElementById("task");
        let convertString = new DOMParser().parseFromString(
          `${localStorage[i]}`,
          "text/html"
        );
        let tag = convertString.body.firstChild;
        myList.appendChild(tag);
        movingTask(tag);
        clickTask(tag);
        taskChecked(tag);
      }
    }
  }
  printLocalStorage()
  function addLiShowTask() {
    let li = createElementLi();
    let showTask = document.getElementById("task");
    showTask.appendChild(li).classList.add("my-list");
    let inputTask = document.getElementById("inputTask");
    li.innerHTML = inputTask.value;
    inputTask.value = "";
  }

  function createElementLi() {
    let createDiv = document.createElement("li");
    clickTask(createDiv);
    doubleClickTask(createDiv);
    clickBtnCleanChecks(createDiv);
    closeSelected(createDiv);
    movingTask(createDiv);
    return createDiv;
  }

  function movingTask(element) {
    let myList = document.getElementById("task");
    let btnUp = document.getElementById("btn-up");
    let btnDown = document.getElementById("btn-down");

    btnUp.addEventListener("click", () => {
      if (element.style.backgroundColor === "mediumturquoise") {
        myList.insertBefore(element, element.previousElementSibling);
      } else {
        return 0;
      }
    });
    btnDown.addEventListener("click", () => {
      if (element.style.backgroundColor === "mediumturquoise") {
        if (element === myList.lastChild) {
          myList.insertBefore(element, myList.firstElementChild);
        } else {
          myList.insertBefore(element.nextElementSibling, element);
        }
      } else {
        return 0;
      }
    });
  }
  function saveTasks() {
    const btnSave = document.getElementById("btn-save");
    let tasks = document.getElementsByTagName("li");
    btnSave.addEventListener("click", () => {
      if (localStorage.length > 0) {
        localStorage.clear();
      }
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i].outerHTML;
        localStorage.setItem(`${i}`, `${task}`);
      }
    });
  }
  saveTasks();
  function closeSelected(element) {
    let btnClose = document.getElementById("btn-close");
    btnClose.addEventListener("click", function() {
      if (element.style.backgroundColor === "mediumturquoise") {
        element.style.display = "none";
      }
    });
  }
  function clickBtnInput() {
    let btn = document.getElementById("btn");
    let input = document.getElementById("inputTask");
    btn.addEventListener("click", function() {
      if (!input.value) {
        alert("adicione um item na lista");
      } else {
        addLiShowTask();
      }
    });
  }
  clickBtnInput();

  function clickBtnDelete() {
    let btnDelete = document.getElementById("btn-delete");
    btnDelete.addEventListener("click", function() {
      let myList = document.getElementById("task");
      if (myList.innerHTML === "") {
        alert("adicione um item na lista");
      } else {
        myList.innerHTML = "";
      }
    });
  }
  clickBtnDelete();

  function clickBtnCleanChecks(element) {
    let btnDelete = document.getElementById("btn-clean-checked");
    btnDelete.addEventListener("click", function() {
      if (element.style.textDecoration === "line-through") {
        element.style.display = "none";
      }
    });
  }
  clickBtnCleanChecks();
  // function clickBtnSaveList(element) {
  //   let btnDelete = document.getElementById("btn-save");
  //   btnDelete.addEventListener("click", function() {
  //     saveStorageList();
  //   });
  // }
  // clickBtnSaveList();
  // function saveStorageList() {
  //   let myList = document.getElementsByClassName("my-list");
  //   for (let i = 0; i < myList.length; i++) {
  //     const element = myList[i];
  //     localStorage.setItem(element.innerHTML, element.style.textDecoration);
  //   }
  // }
  // function saveRepeatTask(){
  //   let myList = document.getElementsByClassName("my-list");
  //   for (let i = 0; i < myList.length; i++) {
  //     const element = myList[i];
  //     localStorage.setItem(element.innerHTML, element.style.textDecoration);
  //   }
  // }
  // saveRepeatTask();

  function KeyUpInput() {
    let input = document.getElementById("inputTask");
    input.addEventListener("keydown", function() {
      if (event.keyCode == 13) {
        if (!input.value) {
          alert("adicione um item na lista");
        } else {
          addLiShowTask();
        }
      }
    });
  }
  KeyUpInput();

  // function createElementInput(){
  //     let input = document.createElement("input");
  //     input.type = "checkbox";
  //     input.className = "checkbox-css";
  //     return input
  // }
};
function clickTask(element) {
  element.addEventListener("click", () => {
    if (element.style.backgroundColor !== "mediumturquoise") {
      element.style.backgroundColor = "mediumturquoise";
    } else {
      element.style.backgroundColor = "transparent";
      element.style.color = "#5B44F2";
    }
  });
}
function doubleClickTask(element) {
  element.addEventListener("dblclick", () => {
    taskChecked(element);
  });
}
function taskChecked(element) {
  if (element.style.textDecoration !== "line-through") {
    element.style.textDecoration = "line-through";
  } else {
    element.style.textDecoration = "none";
  }
}
