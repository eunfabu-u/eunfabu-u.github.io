import React,{useState, useRef, useEffect} from 'react'
import {HiOutlinePlus} from 'react-icons/hi'

function TodoForm({addTodo}) {
    const [input,setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!input){
            return;
        }
        addTodo(input);
        setInput('');
        inputRef.current.focus();
    }
    const inputRef = useRef(null);
    useEffect = (() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        setInput(e.target.value);
    }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="input-box"
        placeholder="Enter a todo"
        value={input}
        name="text"
        ref={inputRef}
        onChange={handleChange}
        autoFocus
      />
      <HiOutlinePlus className="todo-add-button"onClick={handleSubmit} />
    </form>
  );
}

export default TodoForm