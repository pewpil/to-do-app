"use strict";
import Member from "./Member/Member";
import styles from "./Invitation.module.css";
import universal from "../Universal.module.css";

function Invitations() {
	return (
		<div id={styles.screen_cover}>
			<div id={styles.invitations}>
				<div id={styles.header}>
					<div id={styles.title}>
						<h3 className={`${universal.title3}`}>
							Send an invite to a new member
						</h3>
					</div>
					<div id={styles.close}>
						<h3 className={`${universal.title3}`}>
							<u>Go Back</u>
						</h3>
					</div>
				</div>
				<div id={styles.body}>
					<div id={styles.search_email}>
						<form action="">
							<label for="">
								<p
									className={`${universal.body1} ${styles.body_section_title}`}
								>
									Email
								</p>
								<input type="email" name="email" />
								<button className={`${universal.button_long}`}>
									Send Invite
								</button>
							</label>
						</form>
					</div>
					<div id={styles.members}>
						<p className={`${universal.body1} ${styles.body_section_title}`}>
							Members
						</p>
						<div id={styles.members_container}>
							<Member></Member>
							<Member></Member>
							<Member></Member>
							<Member></Member>
							<Member></Member>
						</div>
					</div>
					<div id={styles.project_link}>
						<form>
							<label for="">
								<p
									className={`${universal.body1} ${styles.body_section_title}`}
								>
									Project Link
								</p>
								<input type="email" name="email" />
								<button className={`${universal.button_long}`}>
									Copy Link
								</button>
							</label>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Invitations;
