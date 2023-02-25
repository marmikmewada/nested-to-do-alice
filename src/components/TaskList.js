import React from 'react';
import TaskItem from './TaskItem';

function TaskList(props) {
  const { tasks, selectedCategory, handleTaskDelete } = props;

  const taskItems = tasks
    .filter((task) => task.category === selectedCategory || selectedCategory === '')
    .map((task) => (
      <TaskItem key={task.id} task={task} handleTaskDelete={handleTaskDelete} />
    ));

  return (
    <div>
      <ul>{taskItems}</ul>
    </div>
  );
}

export default TaskList;
