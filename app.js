const inputbox = document.getElementById("inputbox");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputbox.value === ''){
        alert("Your must write something!")
    }
    else{
        // alert("Your something!")
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    saveData();

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();


// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
// function start(){
//   let user = prompt(" What is your name ?");
//   if(user=== "Sahil"){
//     alert("Ok allowed to use the system");
//   }
//   else{
//     alert("You are not have permission for it");
//   }
// }