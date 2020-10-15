import React, {useState} from 'react'
import InputForm from '../InputForm/InputForm'
import Todo from '../Todo/Todo';

export default () => {
    const [todos, setTodos] = useState([]);
    const [todosToShow, setTodosToShow] = useState('all');

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const completeToDo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
            return todo;
        }))
    }

    const activeTodos = () => {
        return todos.filter((todo) => !todo.complete);
    }

    const completeTodos = () => {
        return todos.filter((todo) => todo.complete);
    }

    const deleteComplete = () => {
        setTodos(activeTodos());
    }
    
    let todosToRender = [];

    switch(todosToShow){
        case 'active':
            todosToRender = activeTodos();
            break;
        case 'complete':
            todosToRender = completeTodos();
            break;
        default:
            todosToRender = todos;
    }
    

    return (
        
        <div>
            <InputForm onSubmit={addTodo}/>
            {todosToRender.map((todo) => (
                <Todo key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} onComplete={() => completeToDo(todo.id)}/>
            ))}
            <div>Todos left: {activeTodos().length}</div>
            <button onClick={() => setTodosToShow('all')}>All</button>
            <button onClick={() => setTodosToShow('active')}>Active</button>
            <button onClick={() => setTodosToShow('complete')}>Complete</button>
            <div>
                {completeTodos().length ?  <button onClick={deleteComplete}>Delete complete</button> : null}
            </div>
        </div>

    )
}