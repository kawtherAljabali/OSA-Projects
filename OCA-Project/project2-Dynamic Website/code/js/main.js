function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
function Clear() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    localStorage.clear('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var foritem = '<ul>';
    for(var i=0; i<todos.length; i++) {
        foritem += '<ol>' + todos[i] + '<a class="remove" id="' + i  + '"><i class="far fa-trash-alt"></i></a></ol>';
    };
    foritem += '</ul>';
 
    document.getElementById('todos').innerHTML = foritem;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();
document.getElementById('Clear').addEventListener('click', Clear);
show();

changecolor=()=>{
    var color=document.getElementById("color").value;
    document.body.style.backgroundColor=color;
}
var changeFontStyle =(font)=>{
    document.getElementById( 
        "task").style.fontFamily 
                = font.value; 
}
var onsize =(font)=>{
    document.getElementById( 
        "task").style.fontSize
                = font.value; 
}

