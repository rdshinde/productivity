import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import eventsReducer from "./features/events/eventsSlice";
import notesReducer from "./features/notes/notesSlice";
import blogsReducer from "./features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    events: eventsReducer,
    notes: notesReducer,
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
