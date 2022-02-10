import React from 'react'
import {HiOutlinePlus} from 'react-icons/hi'
import {MdOutlineModeEditOutline} from 'react-icons/md'

function TodoForm({handleChange, handleSubmit, input, inputRef}, props) {
   
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit?(
            <>
                <input
                    type="text"
                    className="todo-input-edit-box"
                    placeholder="Edit a todo"
                    value={input}
                    name="text"
                    ref={inputRef}
                    onChange={handleChange}
                    autoFocus
                />
                <MdOutlineModeEditOutline className="todo-edit-button"onClick={handleSubmit} />
            </>
            
        ):(
            <>
                <input
                    type="text"
                    className="todo-input-add-box"
                    placeholder="Enter a todo"
                    value={input}
                    name="text"
                    ref={inputRef}
                    onChange={handleChange}
                    autoFocus
                />
                <HiOutlinePlus className="todo-add-button"onClick={handleSubmit} />
            </>
        )}
      {/* <input
        className="input-box"
        placeholder="Enter a todo"
        value={input}
        name="text"
        ref={inputRef}
        onChange={handleChange}
        autoFocus
      />
      <HiOutlinePlus className="todo-add-button"onClick={handleSubmit} /> */}
    </form>
  );
}

export default TodoForm