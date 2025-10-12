"use strict";
import styles from "./AddTask.module.css";
import universal from "../Universal.module.css";
import Section from "../Section/Section";

function AddTask() {
  return (
    <div id={styles.screen_cover}>
      <div id={styles.add_task}>
        <div id={styles.header}>
          <h2 className={universal.title3} id={styles.title}>
            Add New Task
          </h2>
          <h3 className={universal.title3} id={styles.go_back}>
            Go Back
          </h3>
        </div>
        <div id={styles.body}>
          <form>
            <label for="">
              <h3 id={styles.task_title} className={universal.title3}>
                Title
              </h3>
              <input
                type="text"
                name="title"
                className={universal.text_field}
              />
            </label>
            <label for="">
              <h3 id={styles.task_date} className={universal.title3}>
                Date
              </h3>
              <input type="date" name="date" />
            </label>
            <label for="">
              <h3 id={styles.task_priority} className={universal.title3}>
                Priority
              </h3>
              <p>Extreme</p>
              <input type="checkbox" name="" />
              <p>Moderate</p>
              <input type="checkbox" name="" />
              <p>Low</p>
              <input type="checkbox" name="" />
            </label>
            <label for="">
              <h3 id={styles.task_description} className={universal.title3}>
                Task Description
              </h3>
              <input
                type="text"
                name="title"
                className={universal.text_field}
              />
            </label>
            <label for="">
              <h3 id={styles.task_image} className={universal.title3}>
                Upload Image
              </h3>
              <input
                type="image"
                name="title"
                className={universal.text_field}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
