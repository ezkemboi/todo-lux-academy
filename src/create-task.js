import React, { useState } from 'react'

const CreateTask = (props) => {
  const { submitTodo } = props;
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    // set our state/todo
    setTodo(event.target.value);
  }

  return (
    <form onSubmit={(event)=> submitTodo(event, todo)}>
      <input 
        name="todo"
        value={todo}
        onChange={handleChange}
        placeholder="Add a task"
      />
    </form>
  )
}

export default CreateTask;
