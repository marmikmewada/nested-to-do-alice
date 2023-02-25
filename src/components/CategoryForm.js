import React from 'react';

function CategoryForm(props) {
  const { newCategory, handleCategorySubmit, setNewCategory } = props;

  const handleCategoryChange = (event) => {
    setNewCategory(event.target.value);
  };

  return (
    <form onSubmit={handleCategorySubmit}>
      <label htmlFor="new-category">New category:</label>
      <input
        id="new-category"
        type="text"
        value={newCategory}
        onChange={handleCategoryChange}
      />
      <button type="submit">Add category</button>
    </form>
  );
}

export default CategoryForm;
