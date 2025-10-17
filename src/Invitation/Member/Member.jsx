"use strict";
import styles from "./Member.module.css";
import universal from "../../Universal.module.css";

function Member() {
	return (
		<div id={styles.member}>
			<img id={styles.pfp} src="" alt="pfp" />
			<div id={styles.text}>
				<p className={universal.body2} id={styles.name}>
					Upashna Gurung
				</p>
				<p className={universal.body3} id={styles.email}>
					uppaeygrg@gmail.com
				</p>
			</div>
		</div>
	);
}

export default Member;
