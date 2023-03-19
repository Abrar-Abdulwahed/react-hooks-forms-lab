import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const { onItemFormSubmit } = props;
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("Produce");

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const addElement = (e) => {
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }
  return (
    <form className="NewItem" onSubmit={addElement}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
