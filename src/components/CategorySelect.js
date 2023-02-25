import React from 'react';

function CategorySelect(props) {
  const { categories, selectedCategory, handleCategorySelect } = props;

  const options = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <div>
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategorySelect}
      >
        <option value="">All</option>
        {options}
      </select>
    </div>
  );
}

export default CategorySelect;
