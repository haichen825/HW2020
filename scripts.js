let tasks = [];//{title:"dddddd", done: false}

function renderEditor(){
    let inputE1 = document.querySelector("#default-todo-panel .todo-editor > input");
    //inputE1.onchange = (e) => {
    //    console.log("text, ", e.target.walue);
    //    //console.log("input change: ",e);
    //};
    let addTask = () =>{
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

        let doneE1 = document.createElement("input");
        doneE1.type = "checkbox";
        itemE1.append(doneE1);

        let titleE1 = document.createElement("label");
        titleE1.innerText = task.title;
        itemE1.append(titleE1);

        let cancelE1 = document.createElement("button");
        cancelE1.innerText = "X";
        cancelE1.onclick = () => {
            tasks.splice(i, 1);
            renderTaskItems()
        }
        itemE1.append(cancelE1);

        itemsE1.append(itemE1);
    }

}

renderEditor();
renderTaskItems();