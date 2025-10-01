"use strict";
import Task from "../Task/Task";
import styles from "./Section.module.css";
import universal from "../Universal.module.css";
import "./Section.css";

function Section(props) {
	const contents = Array(props.subsections.length);
	props.subsections.forEach((subsection, i) => {
		if (i < props.subsections.length - 1) {
			contents.push(
				<>
					{subsection}
					<hr id={styles.hrule} />
				</>,
			);
		} else {
			contents.push(<>{subsection}</>);
		}
	});
	return (
		<div id={props.page_style ? props.page_style : styles.section}>
			<div id={styles.header}>
				<h3 className={universal.title3} id={styles.title}>
					{props.title}
				</h3>
				<button type="button" id={styles.action}>
					<h3 className={universal.title3}>{props.action}</h3>
				</button>
			</div>
			{props.date ? (
				<div id={styles.date}>
					<h3 className={universal.title3}>
						{props.date} <span id={styles.today}>{props.day}</span>
					</h3>
				</div>
			) : (
				<></>
			)}
			<div id={styles.contents}>
		{contents}
			</div>
		</div>
	);
}

export default Section;
