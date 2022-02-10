import React,{useState, useRef, useEffect} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { RiContactsBookLine } from 'react-icons/ri';

function TodoList(props) {
   
    function countTodos(todos){
        console.log('counting todos...');
        return todos.filter(todos=>!todos.hasCompleted).length;
    }

    const [input,setInput] = useState(props.edit ? 
        {
            text: props.edit.value
        } : 
        {
            text: ''
        }
    );
    const {text} = input;
    const handleSubmit = e => {
        e.preventDefault();
        if(!input){
            return;
        }
        // props.onSubmit({
        //     text: input
        // });

        addTodo(input);
        setInput({
            text: ''
        });
        inputRef.current.focus();
    }
    const inputRef = useRef(null);
    useEffect = (() => {
        inputRef.current.focus();
    })
    const handleChange = e => {
        const {name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };


    const [todos, setTodos] = useState([
        {   
            id:1,
            text: 'walk the dog',
            hasCompleted:false
        },
        {   
            id:2,
            text: 'do the laundry',
            hasCompleted:true
        },
        {   
            id:3,
            text: 'eat sandwiTch',
            hasCompleted:false
        },
    ]);
    const nextId = useRef(4);
    const addTodo = () => {
        const newValue = {
            id: nextId.current,
            text
        };
        setTodos([...todos, newValue]);
        nextId.current +=1;
    };
    const editTodo = (id, newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    }
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
    const count = countTodos(todos);


    
  return (
    <>
      <h1>To Do List 💫</h1>
      <div className='todo-count'>{count} things to do is left..</div>
      <TodoForm
        onSubmit={addTodo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        input={text}
      />
      {todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
}

export default TodoList