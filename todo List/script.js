//your code here!
document.getElementById("addTodoBtn").addEventListener("click", addtodo);

function addtodo(){
  var todo=document.getElementById("newTodoInput");
  if(!todo.value){
    window.alert("Empty Input")
    return
}
console.log(todo.value)
var tag=document.createElement("li");
tag.append(todo.value);
document.getElementById("todoList").appendChild(tag);
todo.value=''
}