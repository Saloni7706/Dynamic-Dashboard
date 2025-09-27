import React, { createContext, useReducer, useContext } from "react";

const DashboardContext = createContext();

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 101, name: "Widget 1", text: "Random text 1" },
        { id: 102, name: "Widget 2", text: "Random text 2" }
      ]
    }
  ],
  searchQuery: ""
};

function dashboardReducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories,
          { id: Date.now(), name: action.payload, widgets: [] }
        ]
      };

    case "REMOVE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (cat) => cat.id !== action.payload
        )
      };

    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.id === action.payload.categoryId
            ? { ...cat, widgets: [...cat.widgets, action.payload.widget] }
            : cat
        )
      };

    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.id === action.payload.categoryId
            ? {
                ...cat,
                widgets: cat.widgets.filter(
                  (w) => w.id !== action.payload.widgetId
                )
              }
            : cat
        )
      };

    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
}

export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
