
const tasks= JSON.parse(localStorage.getItem('tasks')) || [];

rendertasks();

    function rendertasks(){
        let list = '';

        for(let i = 0;i<tasks.length;i++){
          //const N = tasks.name;
          //const D = tasks.duedate;
          //or
          const {name : N, duedate : D} = tasks[i];
          const html = 
          `<div class="task-box">
          <div class="js-n">${N}</div>
           <div class="js-d">${D}</div>
          <button class = "js-delete" onclick = "deleteTask(${i});
          rendertasks();
          "> Delete </button></div>
          `;

          list += html;

        }
        
        document.querySelector('.js-p').innerHTML = list;
    }

function addTask(){
  const inputI = document.querySelector('.js-i');
  const N = inputI.value;
  
  const dateI = document.querySelector('.js-Date');
  const D = dateI.value;

  tasks.push({
    name: N,
    duedate: D
  });

  //reseting after adding
  inputI.value='';

  localStorage.setItem('tasks', JSON.stringify(tasks));

  rendertasks();
}
function deleteTask(i) {
  tasks.splice(i, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  rendertasks();
}

function checkKey(event){
      if(event.key === 'Enter') {
        addTask();
      }
    }

