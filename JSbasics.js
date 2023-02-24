var input = document.getElementsByTagName("input")[0];
let add = document.getElementById("add");
var ul = document.getElementsByTagName("ul")[0];

var enter = document.getElementById("enter");
var wdw = document.getElementById("wdw");


function addToLibrary(){
if(input.value.length > 0){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        console.log("click");
    }
}
function addToLibraryWithEnter(event){
    if(input.value.length > 0 && event.keyCode === 13){
        addToLibrary();
    }
}

input.addEventListener("keypress", addToLibraryWithEnter);

enter.addEventListener("click" , addToLibrary);

function popUp(){
    console.log("clicked");
    if(wdw.style.display === "none") {
        wdw.style.display = "block";
    } else {
        wdw.style.display = "none";
    }
   
   
}

enter.addEventListener("click", popUp);