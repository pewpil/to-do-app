"use strict";
import styles from "./TaskCategories.module.css";
import Section from "../Section/Section";
import Table from "./Table/Table";

function TaskCategories() {
  return (
    <div id={styles.task_categories}>
      <Section
        page_style="task_categories"
        title="Task Categories"
        action={
          <button>
            <span className="material-symbols-outlined">add</span>Add Category
          </button>
        }
        subsections={[
          [
            <Section
              page_style="task_status"
              title="Task Status"
              action={
                <button>
                  <span className="material-symbols-outlined">add</span>Add Task
                  Status
                </button>
              }
              subsections={[[<Table></Table>]]}
            ></Section>,
          ],
          [
            <Section
              page_style="task_priority"
              title="Task Priority"
              action={
                <button>
                  <span className="material-symbols-outlined">add</span>Add Task
                  Priority
                </button>
              }
              subsections={[[<Table></Table>]]}
            ></Section>,
          ],
        ]}
      ></Section>
    </div>
  );
}

export default TaskCategories;
