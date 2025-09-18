"use strict";
import styles from "./Login.module.css";
import universals from "../Universal.module.css";

function Login() {
	return (
		<div id={styles.login}>
			<div id={styles.login_form_container}>
				<div id={styles.left}>
					<h1 className={universals.title1}>Sing In</h1>
					<form id={styles.login_form}>
						<input
							className={styles.user_input}
							type="text"
							name="username"
							placeholder="Enter username"
						/>
						<input
							className={styles.user_input}
							type="password"
							name="password"
							placeholder="Enter password"
						/>
						<input type="checkbox" name="rememberme" />
						<p className={`${universals.body2} ${styles.p_inline}`}>
							Remember Me
						</p>
						<button className={styles.user_input} type="submit">
							Login
						</button>
					</form>
					<p className={`${universals.body2} ${styles.p_inline}`}>
						Or Login with:
					</p>
					{/* fb, google and x here */}
					<p className={`${universals.body2} ${styles.p_inline}`}>
						Dont't have an account? <a href="">Create one!</a>
					</p>
				</div>
			</div>
			<div id={styles.right}>{/* fake ass corporate image here */}</div>
		</div>
	);
}

export default Login;
