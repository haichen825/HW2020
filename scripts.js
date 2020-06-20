let task = [];//{title:"dddddd", done: false}

function renderEditor(){
    let inputE1 = document.querySelector("#default-todo-panel .todo-editor > input");
    //inputE1.onchange = (e) => {
    //    console.log("text, ", e.target.walue);
    //    //console.log("input change: ",e);
    //};
    let addE1 = document.querySelector("#default-todo-panel .todo-editor > button");
    addE1.onclick = (e) => {
        console.log("add click");
        let newTask = {
            title: inputE1.value,
            done: false,
        };
        inputE1.value = "";
        task.push(newTask);
        console.log("tasks: ", tasks);
    };
}

renderEditor();