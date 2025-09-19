"use strict";
import styles from "./Singup.module.css";
import universal from "../Universal.module.css";

function Signup() {
  return (
    <div id={styles.sign_up_page}>
      <div id={styles.sign_up}>
        <div id={styles.corporate_art}>
          {/* fake ass signup corporate art go here */}
        </div>
        <div id={styles.signup_form_container}>
          <h2 className={universal.title2}>Sign up</h2>
          <form>
            <label className={styles.text_field_label} for="">
              <p className={`${universal.body1} ${styles.text_field_icon}`}>
                <span className="material-symbols-outlined">person_edit</span>
              </p>
              <input
                className={`${universal.body1} ${styles.text_field}`}
                type="text"
                name="first_name"
                placeholder="Enter First Name"
              />
            </label>
            <label className={styles.text_field_label} for="">
              <p className={`${universal.body1} ${styles.text_field_icon}`}>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </p>
              <input
                className={`${universal.body1} ${styles.text_field}`}
                type="text"
                name="last_name"
                placeholder="Enter Last Name"
              />
            </label>
            <label className={styles.text_field_label} for="">
              <p className={`${universal.body1} ${styles.text_field_icon}`}>
                <span className="material-symbols-outlined">person</span>
              </p>
              <input
                className={`${universal.body1} ${styles.text_field}`}
                type="text"
                name="username"
                placeholder="Enter Username"
              />
            </label>
            <label className={styles.text_field_label} for="">
              <p className={`${universal.body1} ${styles.text_field_icon}`}>
                <span className="material-symbols-outlined">lock</span>
              </p>
              <input
                className={`${universal.body1} ${styles.text_field}`}
                type="text"
                name="password"
                placeholder="Enter Password"
              />
            </label>
            <label className={styles.text_field_label} for="">
              <p className={`${universal.body1} ${styles.text_field_icon}`}>
                <span className="material-symbols-outlined">lock</span>
              </p>
              <input
                className={`${universal.body1} ${styles.text_field}`}
                type="text"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </label>
            <label className={styles.checkbox_field_label} for="">
              <input
                className={styles.checkbox_field}
                type="checkbox"
                name="terms_agreed"
              />
              <p
                className={`${universal.body1} ${styles.checkbox_field_icon}`}
                id={styles.terms_agreed}
              >
                I agree to all terms
              </p>
            </label>
            <label for="">
              <button
                type="button"
                className={`${styles.button_field} ${universal.body1}`}
              >
                Register
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
