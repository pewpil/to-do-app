"use strict";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Notifications from "./Notifications/Notifications";
import AddTask from "./AddTask/AddTask";
import { useState } from "react";

// function App() {
// 	return (
//
// 	);
// }

function App() {
	const [displayNotification, setDisplayNotification] = useState(false);
	function toggleDisplayNotification() {
		setDisplayNotification(!displayNotification);
	}
	return (
		<div id={styles.app}>
			<TopBar title="Dashboard" date="10/12/2002" day="Monday" notification_click={toggleDisplayNotification}></TopBar>
			{displayNotification ? <Notifications></Notifications> : <></>}
			<BrowserRouter>
				<SideBar></SideBar>
				<Routes>
					<Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
					<Route path="/vital-task" element={<VitalTask></VitalTask>}></Route>
					<Route path="/my-task" element={<MyTask></MyTask>}></Route>
					<Route
						path="/task-categories"
						element={<TaskCategories></TaskCategories>}
					></Route>
					<Route path="/login" element={<Login></Login>}></Route>
					<Route path="/account" element={<Account></Account>}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
