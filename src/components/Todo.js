import React, {useState, useEffect} from 'react'
import {RiCheckLine, RiDeleteBin5Line} from 'react-icons/ri'
import TodoForm from './TodoForm';

function Todo({todo, index, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };
  
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return (
    <div className='todo'
      style={{ textDecoration: todo.hasCompleted ? "line-through" : "none" }}
      className={todo.hasCompleted? "todo-done": "todo"}
      >
        <div className='todo-text' onDoubleClick={() => setEdit({ id: todo.id, value: todo.text })}>
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