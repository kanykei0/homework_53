import { useState } from 'react';
import Task from './lib/Task';
import AddTaskForm from './lib/AddTaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {id: '20231026T074434706Z', text: 'Hello, World! My name is John Doe.'},
    {id: '20231026T074531496Z', text: 'Goodbye! See you tomorrow, Jane.'},
    {id: '20231026T074559080Z', text: 'We call him Ilon Mask.'},
  ]);

  const [currentValue, setCurrentValue] = useState('');

  const AddText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  const AddNewTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const currentDate = new Date();
    const idDate = currentDate.toISOString().replace(/[:.-]/g, "");
    const newTask = {id: idDate, text: currentValue};
    setTasks([...tasks, newTask]);
    setCurrentValue('');
  };

  const deleteTask = (id: string) => {
    setTasks((prevState) => prevState.filter(task=>{
        return task.id !== id;
      })
    );
  };

  const renderTasks = () => {
    return tasks.map((task, index)=>{
      return (
          <Task id={task.id} text={task.text} key={index} onClickDelete={() => deleteTask(task.id)}/>
      );
    });
  };

  return (
    <>
     <AddTaskForm field = {currentValue} onTextAdd = {AddText} onClickAdd = {AddNewTask}/>
     <div>{renderTasks()}</div>
    </>
  );
};

export default App;
