"use strict";
import styles from "./TopBar.module.css";
import universal from "../Universal.module.css";

function TopBar(prop) {
	return (
		<div id={styles.top_bar}>
			<div id={styles.title_container}>
				<h1 className={universal.title1} id={styles.title}>
					{prop.title}
				</h1>
			</div>
			<div id={styles.search}>
				<form action="" id={styles.search_form}>
					<input
						type="text"
						name="search"
						placeholder="Search task"
						className={`${universal.text_field} ${universal.body1}`}
						id={styles.search_input}
					/>
					<input
						type="submit"
						value="Submit"
						className={`${universal.submit_field} ${universal.title3}`}
						id={styles.submit_input}
					/>
				</form>
			</div>
			<div id={styles.notif_calendar}>
				<button type="button">Notifcations</button>
				<button type="button">Calendar</button>
			</div>
			<div id={styles.date_time}>
				<h2 className={universal.title2}>Tuesday</h2>
				<h3 className={universal.title3}>Septermber 3</h3>
			</div>
		</div>
	);
}

export default TopBar;
