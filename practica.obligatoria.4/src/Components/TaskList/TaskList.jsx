import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
