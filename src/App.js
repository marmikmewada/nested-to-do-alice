import React, { useState } from 'react';
import './App.scss';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [newCategory, setNewCategory] = useState('');
  const [newTask, setNewTask] = useState('');

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    setCategories([...categories, { name: newCategory, id: categories.length }]);
    setNewCategory('');
  };

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        { name: newTask, id: tasks.length, categoryId: selectedCategory },
      ]);
      setNewTask('');
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(parseInt(event.target.value));
  };

  const categoryOptions = categories.map((category) => (
    <option value={category.id} key={category.id}>
      {category.name}
    </option>
  ));

  const categoryTasks = tasks.filter((task) => task.categoryId === selectedCategory);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="categories">
        <h2>Categories</h2>
        <form onSubmit={handleCategorySubmit}>
          <input
            type="text"
            value={newCategory}
            onChange={(event) => setNewCategory(event.target.value)}
            placeholder="New Category"
          />
          <button className="button" type="submit">Add Category</button>
        </form>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value={null}>Select a Category</option>
          {categoryOptions}
        </select>
        {selectedCategory !== null && (
          <div className="tasks">
            <h2>Tasks</h2>
            <form onSubmit={handleTaskSubmit}>
              <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                placeholder="New Task"
              />
              <button className="add-button" type="submit">Add Task</button>
            </form>
            {categoryTasks.length === 0 && (
              <p>No tasks in this category yet.</p>
            )}
            <ul>
              {categoryTasks.map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
