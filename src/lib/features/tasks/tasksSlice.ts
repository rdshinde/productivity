import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import tasksData from "@/lib/tasks.json";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low" | "none";
  dueDate: string;
  status: "todo" | "progress" | "review" | "done";
  assignee: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: tasksData,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
