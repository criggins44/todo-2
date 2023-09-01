const myArray = [];
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
        
    })

}

let retrieveObj = JSON.parse(localStorage.getItem("taskEntry"));

function showItem(){
    let li = document.createElement('li');
    for(let i = 0; i < myArray.length; i++){
        li.innerHTML = myArray[i].item;
        taskList.appendchild(li)
        
    }
}
showItem()

function clearBtn(){
    localStorage.removeItem("taskEntry");
}
