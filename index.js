let list = document.getElementById("todos-list");
let total = document.getElementById("total")
let complete = document.getElementById("complete")
let incomplete = document.getElementById("incomplete")

let t = 0; c = 0; i = 0;
 
function addTodo()
{
    var inputContent = document.getElementById("input-field"); 
    
    if( inputContent.value === '' )
    {
        alert('Todo should not be Empty'); 
    }

    else
    {
        let li = document.createElement("li");

        list.appendChild(li);
        
        let div = document.createElement("div");
        let inner = document.createElement("i");
        let span = document.createElement("span");
        let outer = document.createElement("i");

        li.classList.add("todos");
        div.classList.add("listElement");
        inner.classList.add("fa-regular", "fa-circle-check");
        outer.classList.add("fa-solid", "fa-trash");
        
        li.appendChild(div);
        div.appendChild(inner);
        div.appendChild(span);
        span.innerHTML = inputContent.value;

        li.appendChild(outer);
        
        t = t + 1;
        i = i + 1;
        incomplete.innerHTML = i;
        total.innerHTML = t;
    }

    inputContent.value = "";
}


list.addEventListener( "click", function(e){
    if( e.target.classList.contains("fa-regular") )
    {
        e.target.parentNode.classList.add("checked");
        c = c+1;  i = i-1;
        complete.innerHTML = c;
        incomplete.innerHTML = i;
    }
    else if( e.target.classList.contains("fa-trash") )
    {
        e.target.parentElement.remove();
        t = t-1;  c = c-1;
        total.innerHTML = t;
        complete.innerHTML = c;
    }
} )