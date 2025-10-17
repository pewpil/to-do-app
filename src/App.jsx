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
import React from "react";

// function App() {
// 	return (
//
// 	);
// }

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showNotifications: false,
			showAddTask: false,
		};
	}

	toggleShowNotifications = () => {
		this.setState({ showNotifications: !this.state.showNotifications });
	};

	toggleShowAddTask = () => {
		this.setState({ showAddTask: !this.state.showAddTask });
	};

	render() {
		return (
			<div id={styles.app}>
				<TopBar
					title="Dashboard"
					date="10/12/2002"
					day="Monday"
					notification_click={this.toggleShowNotifications}
				></TopBar>
				{this.state.showNotifications ? <Notifications></Notifications> : <></>}
				{this.state.showAddTask ? (
					<AddTask go_back={this.toggleShowAddTask}></AddTask>
				) : (
					<></>
				)}
				<BrowserRouter>
					<SideBar></SideBar>
					<Routes>
						<Route
							path="/dashboard"
							element={
								<Dashboard add_task={this.toggleShowAddTask}></Dashboard>
							}
						></Route>
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
}

export default App;
