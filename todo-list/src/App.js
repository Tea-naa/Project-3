import './App.css';
import React, {useState} from 'react';
import TodoList from './TodoList.js';

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // function to add a new task 
  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // function to delete task from to-do and completed lists
  const deleteTask = (index, isCompleted) => {
    if (isCompleted){
      setDoneTasks(doneTasks.filter((_, i) => i !== index));
    } else {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };

  // function to complete a task
  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index));
    setDoneTasks([...doneTasks, taskToComplete]);
  };




//  jsx code for the App component
  return (
    <div className="todo">
      <h1>To-do List:</h1>
      <div className="todo-input">
        <div className="todo-input-item">
          <label htmlFor="taskInput">Task:</label>
          <input
            id="taskInput"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} /> 
        </div>
        <button className="add-btn" onClick ={addTask}>Add </button>
      </div>
      {/* Buttons for toggling between To-do and Completed tasks */}
      <div className="btn-area">
      <button
          className={`button ${!isButtonClicked ? "active" : ""}`}
          onClick={() => setIsButtonClicked(false)}>To-do</button>
        <button
          className={`button ${isButtonClicked ? "active" : ""}`}
          onClick={() => setIsButtonClicked(true)}>Completed</button>
      </div>

      {/* Task list - display to-do or completed tasks based on btn clicked*/}

      <ToDoList />
    </div>
  );
}

export default App;
