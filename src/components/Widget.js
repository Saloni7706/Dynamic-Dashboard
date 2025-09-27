import React from "react";
import { useDashboard } from "../context/DashboardContext";

const Widget = ({ categoryId, widget }) => {
  const { dispatch } = useDashboard();

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_WIDGET",
            payload: { categoryId, widgetId: widget.id }
          })
        }
      >
        ❌
      </button>
    </div>
  );
};

export default Widget;
