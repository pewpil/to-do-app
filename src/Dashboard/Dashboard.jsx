"use strict";
import Section from "./Section/Section.jsx";
import Task from "./Task/Task.jsx";
import Status from "./Status/Status.jsx";
import styles from "./Dashboard.module.css";
import universal from "../Universal.module.css";

function Dashboard() {
	const els = [<Task></Task>, <Task></Task>];
	return (
		<div id={styles.dashboard}>
			<div id={styles.welcome_and_colab}>
				<h1 className={universal.title1}>Welcome back, Sundar!</h1>
				{/* Image of colaborator's pfp's here */}
				{/* invite button here */}
			</div>
			<div id={styles.board}>
				<Section
					title="To-Do"
					action="Add task"
					date="20 June"
					day="Today"
					content={els}
				></Section>
				<div id={styles.stat_and_completed}>
					<Section title="Task Status" content={<Status></Status>}></Section>
					<Section title="Completed Task" content={els}></Section>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
