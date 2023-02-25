import React from 'react';

function TaskForm(props) {
  const { categories, selectedCategory, newTask, handleTaskSubmit, setNewTask } = props;

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleCategoryChange = (event) => {
    handleTaskSubmit(event, true);
  };

  const options = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <form onSubmit={handleTaskSubmit}>
      <label htmlFor="new-task">New task:</label>
      <input id="new-task" type="text" value={newTask} onChange={handleTaskChange} />
      <label htmlFor="category-select">Category:</label>
      <select id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
        {options}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default TaskForm;
