"use strict";
import Plot from "./Plot/Plot";
import styles from "./Status.module.css";
import universal from "../../Universal.module.css";

function Status() {
	return (
		<div id={styles.status}>
			<Plot prop="84" title="Completed"></Plot>
			<Plot prop="84" title="Completed"></Plot>
			<Plot prop="84" title="Completed"></Plot>
		</div>
	);
}

export default Status;
