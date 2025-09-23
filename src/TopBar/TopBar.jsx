"use strict";
import styles from "./TopBar.module.css";
import universal from "../Universal.module.css";

function TopBar(prop) {
  return (
    <div id={styles.top_bar}>
      <div id={styles.title_container}>
        <h1 className={universal.title1} id={styles.title}>
          {prop.title}
        </h1>
      </div>
      <div id={styles.search}>
        <form action="" id={styles.search_form}>
          <input
            type="text"
            name="search"
            placeholder="Search your task here..."
            className={`${universal.text_field} ${universal.body1}`}
            id={styles.search_input}
          />
          <button
            type="button"
            className={`${universal.button_field} ${styles.button}`}
	  id={styles.search_button}
          >
            <span class="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
      <div id={styles.notif_calendar}>
        <button
          type="button"
          className={`${universal.button_field} ${styles.button}`}
        >
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button
          type="button"
          className={`${universal.button_field} ${styles.button}`}
        >
          <span class="material-symbols-outlined">calendar_month</span>
        </button>
      </div>
      <div id={styles.date_time}>
        <h2 className={universal.title2} id={styles.day}>
          {prop.day}
        </h2>
        <h3 className={universal.title3} id={styles.date}>
          {prop.date}
        </h3>
      </div>
    </div>
  );
}

export default TopBar;
