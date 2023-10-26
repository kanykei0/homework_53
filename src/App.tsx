import { useState } from 'react';
import Task from './lib/Task';
import AddTaskForm from './lib/AddTaskForm';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {id: '20231026T074434706Z', text: 'Hello, World! My name is John Doe'},
    {id: '20231026T074531496Z', text: 'Good bye? imma going sleep'},
    {id: '20231026T074559080Z', text: 'We call him Ilon Mask'},
  ]);

  const AddText = () => {

  };

  const renderTasks = () => {
    return tasks.map((task, index)=>{
      return (
          <Task id={task.id} text={task.text} key={index}/>
      );
    });
  };

  return (
    <>
     <AddTaskForm field='' onTextAdd = {AddText}/>
     <div>{renderTasks()}</div>
    </>
  )
}

export default App
