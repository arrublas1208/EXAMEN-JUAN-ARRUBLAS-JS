

const inputBox =  document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");
const usuarioActual = JSON.parse(localStorage.getItem('currentUser'));

function AddTask(){
    if(inputBox.value === ''){
        alert("Ingresa un nombre");

    }else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();


function mensaje(){
    console.log("sirve")
}


function cerrarSesion() {
    localStorage.removeItem('currentUser');
    location.reload();
}