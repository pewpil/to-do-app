"use strict";
import styles from "./MyTask.module.css";
import Section from "../Section/Section";
import Task from "../Task/Task";
import TaskView from "../TaskView/TaskView";

function MyTask() {
	const tasks = [<Task></Task>, <Task></Task>];
  return (
    <div id={styles.my_task}>
	  <Section title="My Tasks" content={tasks}></Section>
	  <Section content={<TaskView></TaskView>}></Section>
    </div>
  );
}

export default MyTask;
