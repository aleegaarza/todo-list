import './App.css';
import { AddForm } from './components/AddForm';
import { UpdateForm } from './components/UpdateForm';
import { ToDo } from './components/ToDo';
import { useState } from 'react';

function App() {

  const [toDo, setToDo] = useState([
    { id: 1, title: 'task 1', status: false },
    { id: 2, title: 'task 2', status: true }
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)

    setToDo(newTasks);
  }

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }
  const cancelUpdate = () => {
    setUpdateData('');

  }

  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }

    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="App">

      <br /><br />
      <h2>To Do list <span>A simple React Todo List App</span></h2>
      <br /><br />

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          updateTask={updateTask}
          changeTask={changeTask}
          cancelUpdate={cancelUpdate}

        />
      ) : (
        <AddForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}


      {toDo && toDo.length ? '' : 'No tasks'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
