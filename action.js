//selectors

let date=new Date();
let day=date.getDate();
let month=date.getMonth();
let months=["jan","feb","march","april","may","june","july","august","sept","oct","nov","dec"];
document.querySelector('.head').textContent="Manage your task easier"+" "+day+" "+months[month];
let todoInput=document.querySelector('.todo-input');
let todoButton=document.querySelector('.todo-btn');
let todoList=document.querySelector('.todolist');
//event listener

todoButton.addEventListener('click',addToDo);
//event delegation 
todoList.addEventListener('click',deleteCheck);

//functions
function addToDo(event){
// prevent from submitting
event.preventDefault();
// creating todo div element

let todoDiv=document.createElement('div');
//adding classes
todoDiv.classList.add('todo');
let todo=document.createElement('li');
todo.innerText=todoInput.value;
todo.classList.add('todo-item');
//adding todo item in todo Div
todoDiv.appendChild(todo);

//add checked button
let checkButton=document.createElement('button');
//creating i button in checked button
checkButton.innerHTML='<i class="fas fa-check-circle"></i>';
checkButton.classList.add('check-button');
//appending button in div
todoDiv.appendChild(checkButton);
//add delete button
let deleteButton=document.createElement('button');
deleteButton.innerHTML='<i class="fas fa-trash"></i>';
deleteButton.classList.add('delete-button');
//appending delete in div
todoDiv.appendChild(deleteButton);
//attaching this to actual ul of class todo-list
todoList.appendChild(todoDiv);
//clear input field
todoInput.value="";

}
function deleteCheck(event){
    console.log(event.target);
    let Item=event.target;
    //delete Todo
    if(Item.classList[0]==='delete-button'){
        //finding parent of delete element then delete it from ul
        let todo=Item.parentNode;
        
        //adding trnsitionn
    todo.classList.add('animation');
    todo.addEventListener('transitionend',function(){
        // after transition delete element todo ie Item.parentNode
       todo.remove();
    });
    
    }
    if(Item.classList[0]==='check-button'){
        let todo=Item.parentNode;
        todo.classList.toggle('completed');
    }

}

