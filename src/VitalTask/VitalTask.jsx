"use strict";
import styles from "./VitalTask.module.css";
import Section from "../Section/Section";
import Task from "../Task/Task";
import TaskView from "../TaskView/TaskView";

function VitalTask() {
	const tasks = [...Array(4).keys()].map(() => <Task></Task>);
	return (
		<div id={styles.vital_task}>
			<Section title="Vital Tasks" content={tasks}></Section>
			<Section content={<TaskView></TaskView>}></Section>
		</div>
	);
}

export default VitalTask;
