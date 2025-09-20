"use strict";
import styles from "./App.module.css";
import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import MyTask from "./MyTask/MyTask";
import VitalTask from "./VitalTask/VitalTask";
import TaskCategories from "./TaskCategories/TaskCategories";
import Login from "./Login/Login";
import Account from "./Account/Account";
import Signup from "./Signup/Signup";

function App() {
  return (
    <div id={styles.app}>
	  <TopBar title="Dashboard" day="Monday" date="06/20/2024"></TopBar>
	  <SideBar></SideBar>
	  <Dashboard></Dashboard>
    </div>
  );
}

export default App;
