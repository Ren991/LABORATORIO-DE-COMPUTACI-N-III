function TaskItem({ task, index, toggleTaskCompletion, deleteTask }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft:"auto",marginRight:"auto",background:"gray" }}>
        <span
          
          style={{ 
            textDecoration: task.completed ? 'line-through' : 'none'  , fontSize:"20px"           
          }}
        >
          {task.text}
        </span>
        <button onClick={() => deleteTask(index)}>Eliminar</button>
        <input type="checkbox"  checked={task.completed} onClick={() => toggleTaskCompletion(index)}/>
        
      </div>
    );
  }
  
  export default TaskItem;
