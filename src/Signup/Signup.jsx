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
            <label for="">
              <p className={universal.body1}>
                <span className="material-symbols-outlined">person_edit</span>
                Enter First name
              </p>
              <input type="text" name="first_name" />
            </label>
            <label for="">
              <p className={universal.body1}>
                <span className="material-symbols-outlined">
                  account_circle
                </span>
                Enter Last name
              </p>
              <input type="text" name="last_name" />
            </label>
            <label for="">
              <p className={universal.body1}>
                <span className="material-symbols-outlined">person</span>Enter
                Username
              </p>
              <input type="text" name="username" />
            </label>
            <label for="">
              <p className={universal.body1}>
                <span className="material-symbols-outlined">lock</span>Enter
                Password
              </p>
              <input type="text" name="password" />
            </label>
            <label for="">
              <p className={universal.body1}>
                <span className="material-symbols-outlined">lock</span>Confirm
                Password
              </p>
              <input type="text" name="confirm_password" />
            </label>
            <label for="">
              <p className={universal.body1} id={styles.terms_agreed}>I agree to all terms</p>
              <input type="checkbox" name="terms_agreed" />
            </label>
	  <label for="">
	  <button type="button">Register</button>
	  </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
