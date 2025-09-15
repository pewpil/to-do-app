"use strict";
import styles from "./Plot.module.css";
import universals from "../../../Universal.module.css";

function Plot(props) {
	return (
		<div id={styles.plot}>
			<div id={styles.exterior}>
				<div id={styles.interior}>
					<h3 className={universals.title2}>{props.prop}%</h3>
				</div>
			</div>
			<h3 className={universals.title3} id={styles.title}>{props.title}</h3>
		</div>
	);
}

export default Plot;
