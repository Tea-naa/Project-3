import React from 'react';
import { FaTrashCan } from "react-icons/fa6"; 
import { GiCheckMark } from "react-icons/gi";

const TodoList = ({ tasks, deleteTask, completeTask, isCompleted }) => {
    return (
      <div className="todo-list">
        {tasks.map((task, index) => (
          <div className="todo-list-item" key={index}>
            <div className="todo-list-item-content">
              <h3>{task.title}</h3>
            </div>
            <div className="todo-list-item-icons">
              {!isCompleted && (
                <GiCheckMark className="icon" onClick={() => completeTask(index)} />
              )}
              <FaTrashCan
                className="icon2"
                onClick={() => deleteTask(index, isCompleted)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default TodoList;