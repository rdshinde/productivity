import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import notesData from "@/lib/notes.json";

interface Note {
  id: string;
  title: string;
  excerpt: string;
  lastUpdated: string;
  tags: string[];
  color: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: notesData,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
