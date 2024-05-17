import TaskList from "./Components/TaskList/TaskList"
import AddTask from "./Components/AddTask/AddTask";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    
    const newTasks = tasks.map((task, idx) => {
      if (idx === index) {
        
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App" style={{ width:"100%",display: 'flex', flexDirection:"column", justifyContent: "center",alignItems:"center",background:"gray" }}>
      <h1>Manejo de tareas</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
    </div>
  );
}

export default App;