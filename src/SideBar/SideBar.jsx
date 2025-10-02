"use strict";
import styles from "./SideBar.module.css";
import universal from "../Universal.module.css";

function SideBar() {
  return (
    <div id={styles.sidebar}>
      <div id={styles.profile}>
        <div id={styles.profile_container}>
          <img
	  src="../../public/images/pfp_girl.webp"
            alt="pfp girl"
            id={styles.profile_pic}
            className={universal.img_placeholder}
          />
          <h2 className={universal.title3} id={styles.name}>
            Sundar Gurung
          </h2>
          <h3 className={universal.title3} id={styles.email}>
            sundargurung360@gamil.com
          </h3>
        </div>
      </div>
      <div id={styles.choices}>
        <div className={styles.choice_container}>
          <span className="material-symbols-outlined fs3rem">dashboard</span>
          <h3 className={`${universal.title3} ${styles.choice}`}>Dashboard</h3>
        </div>
        <div className={styles.choice_container}>
          <span className="material-symbols-outlined fs3rem">
            priority_high
          </span>
          <h3 className={`${universal.title3} ${styles.choice}`}>Vital Task</h3>
        </div>
        <div className={styles.choice_container}>
          <span className="material-symbols-outlined fs3rem">
            assignment_turned_in
          </span>
          <h3 className={`${universal.title3} ${styles.choice}`}>My Task</h3>
        </div>
        <div className={styles.choice_container}>
          <span className="material-symbols-outlined fs3rem">list_alt</span>
          <h3 className={`${universal.title3} ${styles.choice}`}>
            Task Categories
          </h3>
        </div>
        <div className={styles.choice_container}>
          <span className="material-icons fs3rem">settings</span>
          <h3 className={`${universal.title3} ${styles.choice}`}>Settings</h3>
        </div>
        <div className={styles.choice_container}>
          <span className="material-icons fs3rem">help</span>
          <h3 className={`${universal.title3} ${styles.choice}`}>Help</h3>
        </div>
      </div>
      <div id={styles.logout}>
        <div className={styles.choice_container}></div>
        <h3 className={`${universal.title3} ${styles.choice}`}>
          <span className="material-symbols-outlined fs3rem">logout</span>
          Logout
        </h3>
      </div>
    </div>
  );
}

export default SideBar;
