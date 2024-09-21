import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    let [todo, setTodo] = useState([{ task: "Code", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addTodo = (event) => {
        event.preventDefault();
        setTodo((preTodo) => {
            return [...preTodo, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
        
        
    }
    
    function updateTodo(event) {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h1>TODO List</h1>
            <form onSubmit={addTodo}>
                <div>
                    <input type="text" placeholder="Enter Task" onChange={updateTodo} value={newTodo} />
                    <button onClick={addTodo}>Add</button>
                </div>
            </form>
            <div>
                <ul>
                    {todo.map((t) => (<li key={t.id}>
                        <span>{t.task}</span>
                        <button><i class="fa-solid fa-trash"></i></button>
                    </li>))}
                </ul>
            </div>
        </div>
    );
}