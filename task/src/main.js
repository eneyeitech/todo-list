const addTaskButton = document.querySelector("#add-task-button");


addTaskButton.addEventListener("click", function (e){
   const inputTask = document.querySelector("#input-task");
   let taskName = inputTask.value;

   if(taskName.length > 0) {

      appendTask(taskName);
      addTask(taskName);
      addToStorage();
      inputTask.value = "";

   }
});

function appendTask(taskName){
   let liELe = document.createElement("li");
   let inELe = document.createElement("input");
   let spELe = document.createElement("span");
   let btELe = document.createElement("button");


   liELe.setAttribute("type","none");
   liELe.setAttribute("class","container");
   inELe.setAttribute("type","checkbox");
   inELe.setAttribute("class","item");
   spELe.setAttribute("class","task item");
   btELe.setAttribute("class","delete-btn item");
   spELe.innerText = taskName;
   btELe.innerText = "X";

   liELe.appendChild(inELe);
   liELe.appendChild(spELe);
   liELe.appendChild(btELe);

   const taskList = document.querySelector("#task-list");

   taskList.appendChild(liELe);


   btELe.addEventListener("click", function (e){
      deleteTask(e.target);
   });
}

function deleteTask(obj){
   obj.parentNode.remove();
}

let taskList = [
   // .. tasks objects
]

function addTask(task){
   taskList.push(task);
}

function addToStorage(){
   localStorage.setItem("tasks", JSON.stringify(taskList))
}

function getFromStorage(){
   return JSON.parse(localStorage.getItem("tasks")) || [];
}

(function() {
   // your page initialization code here
   // the DOM will be available here
   taskList = getFromStorage();

   for (let i = 0; i< taskList.length; i++) {
      appendTask(taskList[i]);
   }
})();