import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([
        {   
            text: 'walk the dog',
            hasCompleted:false
        },
        {   
            text: 'do the laundry',
            hasCompleted:true
        },
        {   
            text: 'eat sandwiTch',
            hasCompleted:false
        },
    ]);
    const addTodo = (text) => {
        const newValue = [...todos,{text}];
        setTodos(newValue);
    };
    const removeTodo = (index)=>{
        // const newTodos = [...todos].splice(index, 1);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const completeTodo = (index)=>{
        const newTodos = [...todos];
        newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
        setTodos(newTodos);
    }
    
  return (
      <>
        <h1>To Do List 💫</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index)=>{
            return(
                <Todo 
                    todo={todo}
                    index={index}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                />
            );
        })}
        
      </>
   
  )
}

export default TodoList