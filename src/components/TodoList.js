import React, {useState} from 'react'
import TodoForm from './TodoForm'


function TodoList() {
    const[todos, settodos] = useState([])

    const addTodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
          }
          const newTodos = [todo, ...todos]

          settodos(newTodos)
        }
    return (
        <div>
            <h1>Enter your tasks!</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList
