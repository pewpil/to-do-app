"use strict";
import styles from "./Notifications.module.css";
import universal from "../Universal.module.css";
import Notification from "./Notification/Notification";

function Notifications() {
  return (
    <div id={styles.notifications}>
      <div id={styles.header}>
        <div id={styles.left}>
          <h3 className={universal.title3} id={styles.title}>
            Notifications
          </h3>
          <p className={universal.body1} id={styles.day}>
            Today
          </p>
        </div>
        <div id={styles.right}>
          {/* <div id={styles.icon}> */}
          <span className={`${"material-symbols-outlined"} ${styles.icon}`}>
            arrow_top_left
          </span>
          {/* </div> */}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Notifications;
