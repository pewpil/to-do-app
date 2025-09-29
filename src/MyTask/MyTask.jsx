"use strict";
import styles from "./MyTask.module.css";
import Section from "../Section/Section";
import Task from "../Task/Task";
import TaskView from "../TaskView/TaskView";

function MyTask() {
	const tasks = [...Array(4).keys()].map(() => <Task></Task>);
	return (
		<div id={styles.my_task}>
			<div id={styles.page_container}>
				<Section
					page_style="my_task"
					title="My Tasks"
					content={tasks}
				></Section>
				<Section
					page_style="task_view"
					content={<TaskView></TaskView>}
				></Section>
			</div>
		</div>
	);
}

export default MyTask;
