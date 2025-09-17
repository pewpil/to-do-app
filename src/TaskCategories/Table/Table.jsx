"use strict";
import styles from "./Table.module.css";

function Table() {
	return (
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
					<button>
						<span className="material-symbols-outlined">edit</span>
						Edit
					</button>

					<button>
						<span className="material-symbols-outlined">delete</span>
						Delete
					</button>
				</td>
			</tr>
			<tr className={styles.table_row}>
				<td className={styles.table_cell}>2</td>
				<td className={styles.table_cell}>Pending</td>
				<td className={`${styles.table_cell} ${styles.action_cell}`}>
					<button>
						<span className="material-symbols-outlined">edit</span>
						Edit
					</button>

					<button>
						<span className="material-symbols-outlined">delete</span>
						Delete
					</button>
				</td>
			</tr>
			<tr className={styles.table_row}>
				<td className={styles.table_cell}>3</td>
				<td className={styles.table_cell}>Not Started</td>
				<td className={`${styles.table_cell} ${styles.action_cell}`}>
					<button>
						<span className="material-symbols-outlined">edit</span>
						Edit
					</button>

					<button>
						<span className="material-symbols-outlined">delete</span>
						Delete
					</button>
				</td>
			</tr>
		</table>
	);
}

export default Table;
