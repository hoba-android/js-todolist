// setting the variables

let theInput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let taskContainer = document.querySelector('.tasks-content');
let noTaskMsg = document.querySelector('.no-tasks');
let tasksCount = document.querySelector('.tasks-count span');
let tasksCompleted = document.querySelector('.tasks-completed span');
let deleteAllButton = document.querySelector('.deleteall');
let finishAllButton = document.querySelector('.finishall');
let tasksText = [];

// focus on input
window.onload = function () {
  theInput.focus();
};

deleteAllButton.addEventListener('click', () => {
  deleteAll();
});

finishAllButton.addEventListener('click', () => {
  finishAll();
});
theAddButton.addEventListener('click', () => {
  if (theInput.value === '') {
    Swal.fire('Plaeas add the task you want to complete');
  } else {
    noTaskMsg.remove();
    if (checkDuplicates(theInput.value)) {
      Swal.fire('This to do task has already added');
    } else {
      tasksText.push(theInput.value);
      let mainSpan = document.createElement('span');
      let deleteElemet = document.createElement('span');
      let mainSpanText = document.createTextNode(theInput.value);
      let deleteElemetText = document.createTextNode('Delete');
      mainSpan.appendChild(mainSpanText);
      deleteElemet.appendChild(deleteElemetText);
      mainSpan.appendChild(deleteElemet);
      mainSpan.className = 'task-box';
      deleteElemet.className = 'delete';
      taskContainer.appendChild(mainSpan);
      theInput.value = '';
    }
  }
});

function checkDuplicates(contents) {
  return tasksText.includes(contents);
}

document.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    e.target.parentNode.remove();
  }
  if (e.target.classList.contains('task-box')) {
    console.log('hi');
    e.target.classList.toggle('finished');
  }
});

function deleteAll() {
  let allTasks = document.querySelectorAll('.task-box');
  allTasks.forEach((span) => {
    span.remove();
  });
  theInput.value = '';
}

function finishAll() {
  let allTasks = document.querySelectorAll('.task-box');
  allTasks.forEach((span) => {
    span.classList.toggle('finished');
  });
}
