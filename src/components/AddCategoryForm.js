import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const AddCategoryForm = ({ onClose }) => {
  const { dispatch } = useDashboard();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch({ type: "ADD_CATEGORY", payload: name });
    onClose();
  };

  return (
    <form className="add-category-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddCategoryForm;
