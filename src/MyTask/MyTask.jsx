"use strict";
import styles from "./MyTask.module.css";
import Section from "../Section/Section";
import Task from "../Task/Task";

function MyTask() {
	const tasks = [<Task></Task>, <Task></Task>];
  return (
    <div id={styles.my_task}>
	  <Section title="My Tasks" content={tasks}></Section>
	  <Section></Section>
    </div>
  );
}

export default MyTask;
