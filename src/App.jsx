"use strict";
import styles from "./App.module.css";
import TopBar from "./TopBar/TopBar";
import SideBar from "./SideBar/SideBar";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div id={styles.app}>
	  <TopBar title="Dashboard"></TopBar>
	  <SideBar></SideBar>
	  <Dashboard></Dashboard>
    </div>
  );
}

export default App;
