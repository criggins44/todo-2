let myArray = [];
if(localStorage.getItem("taskEntry") === null) {
    myArray = [];
} else {
    myArray = JSON.parse(localStorage.getItem("taskEntry"));

}
const entry = document.getElementById('input');
let taskList = document.getElementById('taskList');



function addTask(){
    let li = document.createElement("li");
    li.innerHTML = entry.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = 'Delete';

    taskList.appendChild(li);

    li.appendChild(deleteBtn);

    let myObj = {
        item: entry.value,
        id: Math.floor(Math.random()*100)
    };
    //console.log(entry.value);

    entry.value = "";

    myArray.push(myObj);
    
    let myObjString = JSON.stringify(myArray);
    localStorage.setItem("taskEntry", myObjString);

    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);
        myArray.splice(this, 1);
        myObjString = JSON.stringify(myArray);
        localStorage.setItem("taskEntry", myObjString);
        }
    )

}


function showItem(){
    for(let i = 0; i < myArray.length; i++){
        let li = document.createElement('li');

        li.innerHTML = myArray[i].item;
        taskList.appendChild(li);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", function(){
            taskList.removeChild(li);
        })
    }
}
showItem();

function clearBtn(){
    localStorage.removeItem("taskEntry");
    taskList.innerHTML = "";
}
