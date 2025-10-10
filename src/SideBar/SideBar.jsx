"use strict";
import styles from "./SideBar.module.css";
import universal from "../Universal.module.css";
import { Link } from "react-router-dom";

function SideBar() {
	return (
		<div id={styles.sidebar}>
			<Link to="/account" id={styles.profile_container}>
				<img
					src="images/pfp_girl.webp"
					alt="pfp girl"
					id={styles.profile_pic}
					className={`${universal.img_placeholder} ${styles.profile_position}`}
				/>
				<h2
					className={`${universal.title3} ${styles.profile_position}`}
					id={styles.name}
				>
					Sundar Gurung
				</h2>
				<h3
					className={`${universal.title3} ${styles.profile_position}`}
					id={styles.email}
				>
					sundargurung360@gamil.com
				</h3>
			</Link>
			<div id={styles.choices}>
				<Link className={styles.choice_container} to="/dashboard">
					<span className={`${"material-symbols-outlined"} ${styles.icon}`}>
						dashboard
					</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>Dashboard</h3>
				</Link>
				<Link className={styles.choice_container} to="/vital-task">
					<span className={`${"material-symbols-outlined"} ${styles.icon}`}>
						priority_high
					</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>Vital Task</h3>
				</Link>
				<Link className={styles.choice_container} to="/my-task">
					<span className={`${"material-symbols-outlined"} ${styles.icon}`}>
						assignment_turned_in
					</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>My Task</h3>
				</Link>
				<Link className={styles.choice_container} to="/task-categories">
					<span className={`${"material-symbols-outlined"} ${styles.icon}`}>
						list_alt
					</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>
						Task Categories
					</h3>
				</Link>
				<div className={styles.choice_container}>
					<span className={`${"material-icons"} ${styles.icon}`}>settings</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>Settings</h3>
				</div>
				<div className={styles.choice_container}>
					<span className={`${"material-icons"} ${styles.icon}`}>help</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>Help</h3>
				</div>
			</div>
			<Link id={styles.logout} to="/login">
				<div className={styles.choice_container}>
					<span className={`${"material-symbols-outlined"} ${styles.icon}`}>
						logout
					</span>
					<h3 className={`${universal.title3} ${styles.choice}`}>Logout</h3>
				</div>
			</Link>
		</div>
	);
}

export default SideBar;
