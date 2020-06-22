let tasks = [];//{title:"dddddd", done: false}

function renderEditor(){
    let inputE1 = document.querySelector("#default-todo-panel .todo-editor > input");
    //inputE1.onchange = (e) => {
    //    console.log("text, ", e.target.walue);
    //    //console.log("input change: ",e);
    //};
    let addTask = () =>{
        if (inputE1.value.length === 0) {
            return;
        }

        let newTask = {
            title: inputE1.value,
            done: false,
        };
        inputE1.value = "";
        
        tasks.push(newTask);
        console.log("tasks: ", tasks);
        renderTaskItems();
    } 
    
    inputE1.onkeypress = (e) => {
        
        if (e.key==="Enter"){
            addTask();
        }
    };
    let addE1 = document.querySelector("#default-todo-panel .todo-editor > button");
    addE1.onclick = (e) => {
        addTask();
        
    };
}

function renderTaskItems() {
    console.log("render items");
    let itemsE1 = document.querySelector("#default-todo-panel .todo-items");

    itemsE1.querySelectorAll("div").forEach((node)=>node.remove());

    console.log(itemsE1);

    for (let i = 0; i < tasks.length; i++ ) {
        let task = tasks[i];
        let itemE1 = document.createElement("div");
        itemE1.className = "task";

        let doneE1 = document.createElement("input");
        doneE1.type = "checkbox";
        doneE1.checked = task.done;
        
        doneE1.onchange = (e) => {
            task.done = e.target.checked;
            if (task.done) {
                itemE1.classList.add("done")
            } else {
                itemE1.classList.remove("done")
            }
        }
        itemE1.append(doneE1);

        let titleE1 = document.createElement("label");
        titleE1.innerText = task.title;
        itemE1.append(titleE1);

        let ctrlbarE1 = renderTaskCtrlbar(tasks, i);


        itemE1.append(ctrlbarE1);

        itemsE1.append(itemE1);
    }

}

function renderTaskCtrlbar(tasks, tasksIdx) {
    let ctrlbarE1 = document.createElement("div");
        ctrlbarE1.className = "ctrlbar";

        let upE1 = document.createElement("button");
        if (tasksIdx === 0) {
            upE1.disabled = true;
        }
        upE1.innerText = "↿";
        upE1.onclick = () =>{
            //
        }
        ctrlbarE1.append(upE1);

        let downE1 = document.createElement("button");
        downE1.innerText = "⇂";
        downE1.onclick = () =>{
            //
        }
        ctrlbarE1.append(downE1)


        let cancelE1 = document.createElement("button");
        cancelE1.innerText = "X";
        cancelE1.onclick = () => {
            tasks.splice(tasksIdx, 1);
            renderTaskItems()
        }

        ctrlbarE1.append(cancelE1);

        return ctrlbarE1;
}

renderEditor();
renderTaskItems();