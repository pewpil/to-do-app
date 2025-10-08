"use strict";
import styles from "./Table.module.css";
import universal from "../../Universal.module.css";

function Table() {
  return (
    <div id={styles.table_container}>
      <table id={styles.table}>
        <tr className={styles.table_row}>
          <th className={styles.table_header}>SN</th>
          <th className={styles.table_header}>Task Status</th>
          <th className={styles.table_header}>Action</th>
        </tr>
        <tr className={styles.table_row}>
          <td className={styles.table_cell}>1</td>
          <td className={styles.table_cell}>Completed</td>
          <td className={`${styles.table_cell} ${styles.action_cell}`}>
            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                edit
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Edit
              </h2>
            </button>

            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                delete
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Delete
              </h2>
            </button>
          </td>
        </tr>
        <tr className={styles.table_row}>
          <td className={styles.table_cell}>2</td>
          <td className={styles.table_cell}>Pending</td>
          <td className={`${styles.table_cell} ${styles.action_cell}`}>
            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                edit
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Edit
              </h2>
            </button>

            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                delete
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Delete
              </h2>
            </button>
          </td>
        </tr>
        <tr className={styles.table_row}>
          <td className={styles.table_cell}>3</td>
          <td className={styles.table_cell}>Not Started</td>
          <td className={`${styles.table_cell} ${styles.action_cell}`}>
            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                edit
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Edit
              </h2>
            </button>

            <button
              className={`${universal.button_long} ${styles.action_button}`}
            >
              <span
                className={`${"material-symbols-outlined"} ${styles.button_icon}`}
              >
                delete
              </span>
              <h2 className={`${universal.title2} ${styles.button_text}`}>
                Delete
              </h2>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
