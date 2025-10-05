"use strict";
import styles from "./TaskView.module.css";
import universal from "../Universal.module.css";

function TaskView() {
	return (
		<div id={styles.task_view}>
			<div id={styles.header}>
				<img
		src="images/task_img.webp"
					alt="task img"
					id={styles.cover}
					className={universal.img_placeholder}
				/>
				<div id={styles.task_meta}>
					{/* this is where the metadata of the task should be placed the following is an example for show */}
					<h2 className={universal.title2}>Task Title</h2>
					<p id={styles.prio} className={universal.title3}>
						Priority <span id={styles.priority}>Moderate</span>
					</p>
					<p id={styles.stat} className={universal.title3}>
						Status <span id={styles.status}>Not Started</span>
					</p>
					<p id={styles.creation} className={universal.title3}>
						Created 20/06/2024
					</p>
				</div>
			</div>
			<div id={styles.task_body}>
				{/* this is where the body of task should be place the following is an example for show */}

				<p className={universal.body1}>
					<b>Objective: </b> To submit reequired documents for something
					important
				</p>
				<p className={universal.body1}>
					<b>Task Description: </b> Review the list of documents required for
					submission and ensure all necessary documents are ready. Organize the
					documents accordingly and scan them if physical copies need to be
					submitted digitally. Rename the scanned files appropriately for easy
					identification and verify the accepted file formats. Upload the
					documents securely to the designated platform, double-check for
					accuracy, and obtain confirmation of successful submission. Follow up
					if necessary to ensure proper processing.
				</p>
				<p className={universal.body1}>
					<b>Addtional Notes: </b>
					<ul>
						<li>Ensure that the documents are authentic and up-to-date</li>
						<li>
							Maintain confidentiality and security of sensitive information
							during the submission process.
						</li>
						<li>
							If there are specific guidelines or deadlines for submission,
							adhere to them dilegently.
						</li>
					</ul>
				</p>

				<p className={universal.body1}>
					<b>Deadline for Submission: </b> End of day
				</p>
			</div>
		</div>
	);
}

export default TaskView;
