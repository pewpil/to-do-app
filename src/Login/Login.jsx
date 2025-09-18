"use strict";
import styles from "./Login.module.css";
import universals from "../Universal.module.css";

function Login() {
	return (
		<div id={styles.login}>
			<div id={styles.login_form_container}>
				<div id={styles.left}>
					<h1 className={universals.title1} id={styles.form_title}>
						Sing In
					</h1>
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
						<button
							className={styles.user_input}
							id={styles.login_button}
							type="submit"
						>
							Login
						</button>
					</form>
					<div id={styles.media_container}>
						<p className={`${universals.body2} ${styles.p_inline}`}>
							Or Login with:
						</p>
						<svg
							className={styles.media_svg}
							viewBox="0 0 24 24"
							fill="#0080ff"
						>
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
						</svg>
						<svg className={styles.media_svg} viewBox="0 0 48 48">
							<path
								fill="#EA4335"
								d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
							></path>
							<path
								fill="#4285F4"
								d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
							></path>
							<path
								fill="#FBBC05"
								d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
							></path>
							<path
								fill="#34A853"
								d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
							></path>
							<path fill="none" d="M0 0h48v48H0z"></path>
						</svg>
						<svg
							className={styles.media_svg}
							viewBox="0 0 18 18"
							fill="currentColor"
						>
							<path
								fillrule="evenodd"
								cliprule="evenodd"
								d="M9.00194 0C13.9726 0 18.0019 4.13093 18.0019 9.22763C18.0019 13.3037 15.4261 16.7615 11.8522 17.9828C11.3959 18.0737 11.2339 17.7856 11.2339 17.5399C11.2339 17.2357 11.2447 16.2421 11.2447 15.0073C11.2447 14.1469 10.9567 13.5854 10.6336 13.2992C12.6379 13.0706 14.7439 12.2902 14.7439 8.74599C14.7439 7.73799 14.3947 6.91543 13.8169 6.26923C13.9105 6.03613 14.2192 5.09755 13.7287 3.82675C13.7287 3.82675 12.9745 3.5795 11.2564 4.77289C10.5373 4.56859 9.76694 4.4658 9.00194 4.4622C8.23694 4.4658 7.46745 4.56859 6.74925 4.77289C5.02935 3.5795 4.27335 3.82675 4.27335 3.82675C3.78465 5.09755 4.09335 6.03613 4.18605 6.26923C3.61095 6.91543 3.25905 7.73799 3.25905 8.74599C3.25905 12.2812 5.36055 13.0735 7.35945 13.3066C7.10205 13.537 6.86895 13.9435 6.78795 14.5402C6.27495 14.776 4.97175 15.1841 4.16895 13.7738C4.16895 13.7738 3.69285 12.8871 2.78925 12.8223C2.78925 12.8223 1.91175 12.8107 2.72805 13.3831C2.72805 13.3831 3.31755 13.6666 3.72705 14.7331C3.72705 14.7331 4.25535 16.3801 6.75915 15.8221C6.76365 16.5934 6.77175 17.3203 6.77175 17.5399C6.77175 17.7838 6.60614 18.0692 6.15704 17.9837C2.58045 16.7642 0.00195312 13.3046 0.00195312 9.22763C0.00195312 4.13093 4.03215 0 9.00194 0Z"
								fill="#282A35"
							></path>
						</svg>
					</div>

					<p className={`${universals.body2} ${styles.p_inline}`}>
						Dont't have an account? <a href="">Create one!</a>
					</p>
				</div>
				<div id={styles.right}>{/* fake ass corporate image here */}</div>
			</div>
		</div>
	);
}

export default Login;
