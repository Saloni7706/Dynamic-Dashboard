import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import { useDashboard } from "../context/DashboardContext";

const Category = ({ category }) => {
  const [showForm, setShowForm] = useState(false);
  const { dispatch } = useDashboard();

  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.name}</h2>
        <button
          className="remove-category"
          onClick={() =>
            dispatch({ type: "REMOVE_CATEGORY", payload: category.id })
          }
        >
          ❌ Remove Category
        </button>
      </div>

      <div className="widgets">
        {category.widgets.map((w) => (
          <Widget key={w.id} categoryId={category.id} widget={w} />
        ))}
      </div>

      {showForm ? (
        <AddWidgetForm
          categoryId={category.id}
          onClose={() => setShowForm(false)}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>+ Add Widget</button>
      )}
    </div>
  );
};

export default Category;
