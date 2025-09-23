"use strict";
import styles from "./TaskCategories.module.css";
import Section from "../Section/Section";
import Table from "./Table/Table";

function TaskCategories() {
  return (
    <div id={styles.task_categories}>
      <Section
        title="Task Categories"
        action={
          <button>
            <span className="material-symbols-outlined">add</span>Add Category
          </button>
        }
        content={
          <>
            <Section
              title="Task Status"
              action={
                <button>
                  <span className="material-symbols-outlined">add</span>Add Task
                  Status
                </button>
              }
              content={<Table></Table>}
            ></Section>
            <Section
              title="Task Priority"
              action={
                <button>
                  <span className="material-symbols-outlined">add</span>Add Task
                  Priority
                </button>
              }
              content={<Table></Table>}
            ></Section>
          </>
        }
      ></Section>
    </div>
  );
}

export default TaskCategories;
