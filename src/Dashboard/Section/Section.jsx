"use strict";
import Task from "../Task/Task";
import styles from "./Section.module.css";
import universal from "../../Universal.module.css";

function Section(props) {
	return (
		<div id={styles.section}>
			<div id={styles.header}>
				<h3 className={universal.title3} id={styles.title}>
					{props.title}
				</h3>
				<button type="button" id={styles.action}>
					{/* plus icon here */}
					<h3 className={universal.title3}>{props.action}</h3>
				</button>
			</div>
			<div id={styles.date}>
				<h3 className={universal.title3}>
					{props.date} <span id={styles.today}>{props.day}</span>
				</h3>
			</div>
			<div id={styles.contents}>{props.content}</div>
		</div>
	);
}

export default Section;
