"use strict";
import styles from "./SideBar.module.css";
import universal from "../Universal.module.css";

function SideBar() {
  return (
    <div id={styles.sidebar}>
      <div id={styles.profile}>
        <img
          src="https://videos.openai.com/vg-assets/assets%2Ftask_01k4zrwxm1fz5rm2h433v0tvk3%2F1757707985_img_0.webp?st=2025-09-13T05%3A34%3A54Z&se=2025-09-19T06%3A34%3A54Z&sks=b&skt=2025-09-13T05%3A34%3A54Z&ske=2025-09-19T06%3A34%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=5e5fc900-07cf-43e7-ab5b-314c0d877bb0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=sTL1DuBCOnvmx3WWfkIciTHHZV350iHTHVuNdc5%2FiRQ%3D&az=oaivgprodscus"
          alt="pfp girl"
          id={styles.profile_pic}
        />
        <h2 className={universal.title3} id={styles.name}>
          Sundar Gurung
        </h2>
        <h3 className={universal.title3} id={styles.email}>
          sundargurung360@gamil.com
        </h3>
      </div>
      <div id={styles.choices}>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </h3>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">priority_high</span>
          Vital Task
        </h3>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">assignment_turned_in</span>
          My Task
        </h3>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">list_alt</span>
          Task Categories
        </h3>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">settings</span>
          Settings
        </h3>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">help</span>
          Help
        </h3>
      </div>
      <div id={styles.logout}>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined">logout</span>
          Logout
        </h3>
      </div>
    </div>
  );
}

export default SideBar;

// return (
// 	<div id={styles.sidebar}>
// 		<div id={styles.profile}>
// 			<img
// 				src="https://videos.openai.com/vg-assets/assets%2Ftask_01k4zrwxm1fz5rm2h433v0tvk3%2F1757707985_img_0.webp?st=2025-09-13T05%3A34%3A54Z&se=2025-09-19T06%3A34%3A54Z&sks=b&skt=2025-09-13T05%3A34%3A54Z&ske=2025-09-19T06%3A34%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=5e5fc900-07cf-43e7-ab5b-314c0d877bb0&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=sTL1DuBCOnvmx3WWfkIciTHHZV350iHTHVuNdc5%2FiRQ%3D&az=oaivgprodscus"
// 				alt="pfp girl"
// 				id={styles.profile_pic}
// 			/>
// 			<h2 className={universal.title3} id={styles.name}>
// 				Sundar Gurung
// 			</h2>
// 			<h3 className={universal.title3} id={styles.email}>
// 				sundargurung360@gamil.com
// 			</h3>
// 		</div>
// 		<div id={styles.choices}>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">dashboard</span>
// 				Dashboard
// 			</h3>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">priority_high</span>
// 				Vital Task
// 			</h3>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">assignment_turned_in</span>
// 				My Task
// 			</h3>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">list_alt</span>
// 				Task Categories
// 			</h3>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">settings</span>
// 				Settings
// 			</h3>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">help</span>
// 				Help
// 			</h3>
// 		</div>
// 		<div id={styles.logout}>
// 			<h3 className={`${universal.title3} ${styles.choice}`}>
// 				<span className="material-symbols-outlined">logout</span>
// 				Logout
// 			</h3>
// 		</div>
// 	</div>
// );
