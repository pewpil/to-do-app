"use strict";
import styles from "./App.module.css";
import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";
import MyTask from "./MyTask/MyTask";
import VitalTask from "./VitalTask/VitalTask";

function App() {
  return (
    <div id={styles.app}>
	  <TopBar title="Dashboard" day="Tuesday" date="20 September"></TopBar>
	  <SideBar></SideBar>
	  <VitalTask></VitalTask>
    </div>
  );
}

export default App;
