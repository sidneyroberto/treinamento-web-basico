const $ = document.querySelector.bind(document)
let tasks = []

const loadStoredTasks = () => {
  /**
   * Verifica se há tarefas salvas no localStorage
   */
  const tasksJson = localStorage.getItem('tasks')
  if (tasksJson) {
    /**
     * Converte a string JSON de volta
     * para um array de strings
     */
    tasks = JSON.parse(tasksJson)

    tasks.forEach(t => {
      const newTaskItem = `
        <li>${t}</li>
      `

      $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
    })
  }
}

/**
 * Invoca explicitamente a função loadStoredTasks
 */
loadStoredTasks()

const addTask = (event) => {
  event.preventDefault()

  const taskDescription = $('#task-description').value

  /**
   * Template literals
   */
  const newTaskItem = `
    <li>${taskDescription}</li>
  `

  $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
  $('#task-form').reset()

  saveToLocalStorage(taskDescription)
}

const saveToLocalStorage = (taskDescription) => {
  tasks.push(taskDescription)
  const tasksJson = JSON.stringify(tasks)
  localStorage.setItem('tasks', tasksJson)
}