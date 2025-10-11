"use strict";
import styles from "./Notification.module.css";
import universal from "../../Universal.module.css";

function Notification() {
  return (
    <div id={styles.notification}>
      <div id={styles.meta}>
        <p className={`${universal.body1} ${styles.task_info}`}>
          Complete the UI design of Landing Page for FoodVentures.
          <span id={styles.time}>2h</span>
        </p>
        <p className={`${universal.body1} ${styles.task_prio}`}>
          Priority: <span id={styles.priority}>High</span>
        </p>
      </div>
      <div id={styles.img}>
        <img src="images/task_img.webp" id={styles.task_img} />
      </div>
    </div>
  );
}

export default Notification;
