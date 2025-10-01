"use strict";
import styles from "./VitalTask.module.css";
import Section from "../Section/Section";
import Task from "../Task/Task";
import TaskView from "../TaskView/TaskView";

function VitalTask() {
	const tasks = [...Array(4).keys()].map(() => <Task></Task>);
	return (
		<div id={styles.vital_task}>
			<div id={styles.page_container}>
				<Section
					page_style="vital_tasks"
					title="Vital Tasks"
					subsections={[[tasks]]}
				></Section>
				<Section
					page_style="task_view"
					subsections={[[<TaskView></TaskView>]]}
				></Section>
			</div>
		</div>
	);
}

export default VitalTask;
