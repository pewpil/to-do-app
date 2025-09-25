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
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01k53cqdm9e9n874v7pq2nrcxw%2F1757829403_img_0.webp?st=2025-09-14T04%3A26%3A29Z&se=2025-09-20T05%3A26%3A29Z&sks=b&skt=2025-09-14T04%3A26%3A29Z&ske=2025-09-20T05%3A26%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ffff87a-01f1-47c9-9090-32999d4d6380&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Ilbrexohuut%2BEYSxFperMpWDHPNVbbU9OiQH%2FKh%2F1Rc%3D&az=oaivgprodscus"
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
