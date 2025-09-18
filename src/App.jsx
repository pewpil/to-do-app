"use strict";
import styles from "./App.module.css";
import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import MyTask from "./MyTask/MyTask";
import VitalTask from "./VitalTask/VitalTask";
import TaskCategories from "./TaskCategories/TaskCategories";
import Login from "./Login/Login";

function App() {
  return (
    <div id={styles.app}>
	  <Login></Login>
    </div>
  );
}

export default App;
