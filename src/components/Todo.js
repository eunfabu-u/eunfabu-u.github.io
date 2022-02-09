import React from 'react'
import {RiCheckLine, RiDeleteBin5Line} from 'react-icons/ri'

function Todo({todo, index, completeTodo, removeTodo}) {
  return (
    <div className='todo'
      style={{ textDecoration: todo.hasCompleted ? "line-through" : "none" }}

      className={todo.hasCompleted? "todo-done": "todo"}
      >
        <div className='todo-text'>
          {todo.text}
        </div>
        <div className='todo-buttons'>
          <RiCheckLine className='complete-todo' onClick={()=>completeTodo(index)} />
          <RiDeleteBin5Line className='remove-todo' onClick={()=>removeTodo(index)}/>
        </div>
       
    </div>
            
  )
}

export default Todo