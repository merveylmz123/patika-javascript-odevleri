const input = document.querySelector("#task");
const todoList = document.querySelector("#list");
const cardBody= document.querySelector(".card-body");
const container = document.querySelector(".container");

function newElement(){ 
    const inputText = input.value.trim();
        if(inputText == null || inputText == ""){
              showAlert("danger","Listeye boş ekleme yapamazsınız!");
        }
        else{
             addTodo(inputText);
        }
}

function runEvents(){
    cardBody.addEventListener("click",deleteTodo);
    todoList.addEventListener("click",completeTodo);
}
runEvents();

// todo ekleme
function addTodo(newInputText){
    const li = document.createElement("li")
    li.innerHTML = newInputText;
    li.className = "todo"

    const span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "x";

    li.appendChild(span);
    todoList.appendChild(li);
    
    input.value = ""; 
    showAlert("success","Listeye eklendi.");
    }

// todo silme
function deleteTodo(e){
    if(e.target.className === "close"){
        const todo = e.target.parentElement;
        todo.remove();
        showAlert("warning","Listeden silindi.");
    }
}

function completeTodo(e){
    if(e.target.className === "todo"){ 
        const todocomplete = e.target;
        todocomplete.style.backgroundColor = "#276678";
        todocomplete.style.color = "white";
        todocomplete.style.textDecoration = "line-through";
    }
}

function showAlert(type, message){ 
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.innerHTML = message;
    container.appendChild(div);

    setTimeout(function(){
        div.remove();
    },3000);
}