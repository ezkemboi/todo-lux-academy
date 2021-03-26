import React, { useState } from 'react';
import './App.css';
// C R U D
import CreateTask from './create-task';

function App() {
  const [ todos, setTodos] = useState([]);
  // READ -> have access to added todo
  // some todos -> add the new
  // control data from the parent
  const submitTodo = (event, todo) => {
    event.preventDefault();
    let newTasks = [...todos, { name: todo, completed: false }];
    setTodos(newTasks)
  }

  const markComplete = (event, id) => {
    const isChecked = event.target.checked;
    // mutate 
    const newtasks = todos.map((task, index) => {
      let returnTask = {...task}

      if(index === id && isChecked) {
        returnTask.completed = true
      }
      // marking incomplete -> already completed task
      if(index === id && !isChecked) {
        returnTask.completed = false
      }
      return returnTask;
    })
    // update the state
    setTodos(newtasks);
  }

  const deleteTask = (event, index) => {
    todos.splice(index, 1)
    const newArr = todos;
    setTodos(newArr);
  }

  return (
    <div className="App">
      <div>
        {
          todos.length > 0 ?
          todos.map((item, index) => {
            return (
              <div key={index} style={{ display: 'flex', justifyContent:"center"}}>
                <input 
                  type="checkbox"
                  checked={item.completed ? true : false}
                  style={{ width: '20px', 
                  height: '20px'}} 
                  onClick={(event) => markComplete(event, index)}
                />
                <p style={{ 
                  marginRight: "5px", 
                  marginLeft: "5px",
                  textDecoration: item.completed ? 'line-through' : ''
                }}
                >{item.name}</p>
                <p 
                  onClick={(event) => deleteTask(event, index)}
                  style={{ cursor: 'pointer', color: 'red'}}
                >
                  X
                </p>
              </div>
              
            )
          })
          : <p>You currently have no tasks</p>
        }
      </div>
      <CreateTask 
        submitTodo={submitTodo}
      />
    </div>
  );
}

export default App;
