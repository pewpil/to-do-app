"use strict";
import styles from "./Task.module.css";
import universal from "../Universal.module.css";

function Task() {
  return (
    <div id={styles.task}>
      <div id={styles.task_info}>
        <div id={styles.progress_icon_container}>
          <h1>
            <span
              className="material-symbols-outlined"
              id={styles.progress_icon}
            >
              circle
            </span>
          </h1>
        </div>
        <div id={styles.printable_meta}>
          <h2 className={universal.title2}>Task title</h2>
          <p className={universal.body1}>
            Pretend that this is the description of the task so these are random
            words to make the description very long hahaha lol ...
          </p>
        </div>
        <div id={styles.cover_container}>
          <img
            src="../../public/images/task_img.webp"
            alt="task img"
            id={styles.cover}
            className={universal.img_placeholder}
          />
        </div>
      </div>
      <div id={styles.task_meta}>
        <p id={styles.prio} className={universal.body2}>
          Priority <span id={styles.priority}>Moderate</span>
        </p>
        <p id={styles.stat} className={universal.body2}>
          Status <span id={styles.status}>Not Started</span>
        </p>
        <p id={styles.creation} className={universal.body2}>
          Created 20/06/2024
        </p>
      </div>
    </div>
  );
}

export default Task;
