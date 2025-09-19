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

function App() {
  return (
    <div id={styles.app}>
	  <TopBar title="Dashboard" day="Tuesday" date="20 June"></TopBar>
	  <SideBar></SideBar>
	  <Account></Account>
    </div>
  );
}

export default App;
