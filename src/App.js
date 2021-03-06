import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import EntryPage from "./components/EntryPage/EntryPage";
import MainPage from "./components/MainPage/MainPage";
import TaskBar from "./components/TaskBar/TaskBar";
import About from "./components/About/About";
import Calendar from "./components/Calendar/Calendar";
import Contact from "./components/Contact/Contact";
import Topics from "./components/Topics/Topics";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/**/}
      <TaskBar></TaskBar>
      <EntryPage></EntryPage>

      <About></About>
      <Topics></Topics>
      <Contact></Contact>
      {/*<Route path="/about" component={About}></Route>
            <Route path="/calendar" component={Calendar}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/topics" component={Topics}></Route>
  */}
    </div>
  );
}

export default App;
