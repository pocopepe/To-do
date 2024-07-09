import { useState } from 'react';
import { CreateTodo } from './components/CreateToDo';
import {Todos} from './components/Todo';
import axios from 'axios';
function App() {
  const [Todo, setTodo]=useState([]);

  fetch('http://localhost:3000/todo').then(async (res)=>{setTodo(res.todos);})
  
    return (
    <div><CreateTodo></CreateTodo>
    </div>
    )

}

export default App
