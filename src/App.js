import React from "react";
import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";
import "./App.css";

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
