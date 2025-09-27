import React, { useState } from "react";
import { useDashboard } from "../context/DashboardContext";
import Category from "./Category";
import AddCategoryForm from "./AddCategoryForm";

const Dashboard = () => {
  const { state, dispatch } = useDashboard();
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  return (
    <div className="dashboard">
      <h1>Dynamic Dashboard</h1>
      <input
        type="text"
        placeholder="Search widgets..."
        value={state.searchQuery}
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />

      {state.categories.map((cat) => {
        const filteredWidgets = cat.widgets.filter((w) =>
          w.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
        return (
          <Category
            key={cat.id}
            category={{ ...cat, widgets: filteredWidgets }}
          />
        );
      })}

      {showCategoryForm ? (
        <AddCategoryForm onClose={() => setShowCategoryForm(false)} />
      ) : (
        <button onClick={() => setShowCategoryForm(true)}>
          + Add Category
        </button>
      )}
    </div>
  );
};

export default Dashboard;
