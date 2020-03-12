import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MainPage from "./components/MainPage/MainPage";
import TaskBar from "./components/TaskBar/TaskBar";

function App() {
  return (
    <div className="App">
      <TaskBar></TaskBar>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
