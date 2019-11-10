import database from '../firebase/firebase.js';

export const setTasks = (tasks) => ({
    type: 'SET_TASKS',
    tasks
  })
  
  export const startSetTasks = () => {
    return (dispatch) => {
      database.ref('tasks').once('value').then((snapshot) => {
        const tasks = [];
        snapshot.forEach((childSnapshot) => {
          tasks.push({
            ...childSnapshot.val()
          })
        })
        dispatch(setTasks(tasks));
      })
    }
  }

  export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
  })
  
  export const startAddTask = (taskData = {}) => {
    return (dispatch) => {
        const {
            task = '',
            tags = []
          } = taskData;

      const data = {task, tags}
      console.log(data)
      return database.ref('task').push(data).then((ref) => {
        dispatch(addTask(data))
      })
    }
  }