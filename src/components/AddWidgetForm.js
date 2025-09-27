import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const AddWidgetForm = ({ categoryId, onClose }) => {
  const { dispatch } = useDashboard();
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newWidget = {
      id: Date.now(),
      name,
      text
    };

    dispatch({
      type: "ADD_WIDGET",
      payload: { categoryId, widget: newWidget }
    });

    onClose();
  };

  return (
    <form className="add-widget-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Widget name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddWidgetForm;
