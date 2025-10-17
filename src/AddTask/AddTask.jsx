"use strict";
import styles from "./AddTask.module.css";
import universal from "../Universal.module.css";

function AddTask(prop) {
  return (
    <div id={styles.screen_cover}>
      <div id={styles.add_task}>
        <div id={styles.header}>
          <h2 className={universal.title3} id={styles.title}>
            Add New Task
          </h2>
          <h3 onClick={prop.go_back}className={universal.title3} id={styles.go_back}>
            <u>Go Back</u>
          </h3>
        </div>
        <div id={styles.body}>
          <form id={styles.form}>
            <label for="">
              <h3
                id={styles.task_title}
                className={`${universal.body1} ${styles.form_label}`}
              >
                Title
              </h3>
              <input
                type="text"
                name="title"
                className={`${universal.text_field} ${styles.short_text_field}`}
              />
            </label>
            <label for="">
              <h3
                id={styles.task_date}
                className={`${universal.body1} ${styles.form_label}`}
              >
                Date
              </h3>
              <input type="date" name="date" id={styles.date_field} />
            </label>
            <label for="">
              <h3
                id={styles.task_priority}
                className={`${universal.body1} ${styles.form_label}`}
              >
                Priority
              </h3>
              <p className={`${universal.body2} ${styles.priority_label}`}>
                Extreme
              </p>
              <input
                className={styles.checkbox_field}
                type="checkbox"
                name=""
              />
              <p className={`${universal.body2} ${styles.priority_label}`}>
                Moderate
              </p>
              <input
                className={styles.checkbox_field}
                type="checkbox"
                name=""
              />
              <p className={`${universal.body2} ${styles.priority_label}`}>
                Low
              </p>
              <input
                className={styles.checkbox_field}
                type="checkbox"
                name=""
              />
            </label>
            <div id={styles.lower_body}>
              <label for="" id={styles.description}>
                <h3
                  id={styles.task_description}
                  className={`${universal.body1} ${styles.form_label}`}
                >
                  Task Description
                </h3>
                <textarea
                  name="title"
                  className={`${universal.text_field} ${styles.long_text_field}`}
                  placeholder="Start writing here"
                ></textarea>
              </label>
              <label for="" a id={styles.image}>
                <h3
                  id={styles.task_image}
                  className={`${universal.body1} ${styles.form_label}`}
                >
                  Upload Image
                </h3>
                <div id={styles.image_upload}>
                  <div id={styles.upload_image_container}>
                    <span
                      className={`${"material-symbols-outlined"} ${styles.upload_image}`}
                    >
                      image_arrow_up
                    </span>
                  </div>
                  <p className={`${universal.body2} ${styles.dragdrop}`}>
                    Drag & Drop files here
                  </p>
                  <p className={`${universal.body2} ${styles.dragdrop}`}>or</p>
                  <div id={styles.browse_button_container}>
                    <button className={`${styles.browse_button}`}>
                      Browse
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
