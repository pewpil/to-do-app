"use strict";
import Task from "../Task/Task";
import Section from "../Section/Section";
import Status from "./Status/Status.jsx";
import styles from "./Dashboard.module.css";
import universal from "../Universal.module.css";

function Dashboard() {
	const els = [
		[...Array(3).keys()].map(() => <Task></Task>),
		[...Array(2).keys()].map(() => <Task></Task>),
	];
	return (
		<div id={styles.dashboard}>
			<div id={styles.welcome_and_colab}>
				<h1 className={universal.title1}>Welcome back, Sundar!</h1>
				{/* Image of colaborator's pfp's here */}
				{/* invite button here */}
			</div>
			<div id={styles.board}>
				<Section
					page_style="dashboard_todo"
					title={
						<div id={styles.todo_title_container}>
							<span
								className={`${"material-symbols-outlined"} ${styles.title_icon}`}
							>
								pending_actions
							</span>
							<h3
								className={`${universal.title3} ${styles.dashboard_section_title}`}
							>
								To-Do
							</h3>
						</div>
					}
					action={
						<>
							<span class="material-symbols-outlined">add</span>
							Add task
						</>
					}
					date="20 June"
					day="Today"
					subsections={els}
				></Section>
				<div id={styles.stat_and_completed}>
					<Section
						page_style="dashboard_task_status"
						title={
							<>
								<span class="material-symbols-outlined">inventory</span>
								Task Status
							</>
						}
						subsections={[[<Status></Status>]]}
					></Section>
					<Section
						page_style="dashboard_completed_tasks"
						title={
							<>
								<span class="material-symbols-outlined">
									assignment_turned_in
								</span>
								Completed Tasks
							</>
						}
						subsections={els}
					></Section>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
