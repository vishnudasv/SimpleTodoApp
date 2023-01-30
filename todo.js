    

function add(){
    var newValue = document.getElementById('task').value;
    var li = document.createElement('li');
    var t = document.createTextNode(newValue);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));

    


 

    li.appendChild(t);
    
    li.appendChild(btn);
    
    
    btn.addEventListener("click", removeItem);
    function removeItem(e) {
        e.target.parentNode.remove();
    }


    if(newValue == ''){
        alert("error");
    }
    else{
        document.getElementById("myUL").appendChild(li);
        
    }
    document.getElementById("task").value = "";
    
    
} 








































/*function add(){
    var newValue = document.getElementById('task').value;
    var li = document.createElement('li');
    var t = document.createTextNode(newValue);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(t);

    if(newValue == ''){
        alert("error");
    }
    else{
        document.getElementById("myUL").appendChild(li);
        document.getElementById("myUL").appendChild(btn);
    }
    document.getElementById("task").value = "";
    
} */
