import {useState} from 'react'
import "./todo.css"
import { useNavigate } from 'react-router-dom'





  


  const Todo = () => {

    const landingPage=useNavigate();


    const [newTask, setNewTask] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTasks([...tasks, newTask]);
      setNewTask('');
    };
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredTasks = tasks.filter((task) =>
      task.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <>
       <div className='top-navbar'>
        <button onClick={()=>landingPage("/")}>Home</button>
      </div>
      {/* <h1>To Do App</h1> */}


      <div className="todo-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="todo-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>






    </>
  )
}

export default Todo