"user strict";
import Section from "../Section/Section";
import styles from "./Account.module.css";
import universal from "../Universal.module.css";

function Account() {
	return (
		<div id={styles.account}>
			<Section
				title="Account Information"
				content={
					<div id={styles.update_info}>
						<div id={styles.profile}>
							<img
								src="https://videos.openai.com/vg-assets/assets%2Ftask_01k4zrwxm1fz5rm2h433v0tvk3%2F1757707985_img_0.webp?st=2025-09-13T05%3A34%3A54Z&se=2025-09-19T06%3A34%3A54Z&sks=b&skt=2025-09-13T05%3A34%3A54Z&ske=2025-09-19T06%3A34%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=5e5fc900-07cf-43e7-ab5b-314c0d877bb0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=sTL1DuBCOnvmx3WWfkIciTHHZV350iHTHVuNdc5%2FiRQ%3D&az=oaivgprodscus"
								alt="pfp girl"
								id={styles.profile_pic}
							/>
							<div id={styles.profile_meta}>
								<h2 className={universal.title2}>Sundar Gurung</h2>
								<h3 className={universal.title3}>sundargurung360@gmail.com</h3>
							</div>
						</div>
						<div id={styles.form_container}>
							<form>
								<label>
									<p className={universal.body1} id={styles.field_label}>
										First Name
									</p>
									<input
										type="text"
										name="first_name"
										className={`${universal.body1} ${styles.text_field}`}
									/>
								</label>
								<label>
									<p className={universal.body1} id={styles.field_label}>
										Last Name
									</p>
									<input
										type="text"
										name="last_name"
										className={`${universal.body1} ${styles.text_field}`}
									/>
								</label>
								<label>
									<p className={universal.body1} id={styles.field_label}>
										Email Address
									</p>
									<input
										type="text"
										name="email_address"
										className={`${universal.body1} ${styles.text_field}`}
									/>
								</label>
								<label>
									<p className={universal.body1} id={styles.field_label}>
										Contact Number
									</p>
									<input
										type="tel"
										name="contact_number"
										className={`${universal.body1} ${styles.text_field}`}
									/>
								</label>
								<label>
									<p className={universal.body1} id={styles.field_label}>
										Position
									</p>
									<input
										type="text"
										name="position"
										className={`${universal.body1} ${styles.text_field}`}
									/>
								</label>
								<span id={styles.buttons_container}>
									<button className={styles.button_field}>
										<p className={universal.body2}>Update Info</p>
									</button>
									<button className={styles.button_field}>
										<p className={universal.body2}>Change Password</p>
									</button>
								</span>
							</form>
						</div>
					</div>
				}
			></Section>
		</div>
	);
}

export default Account;
