import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import eventsData from "@/lib/events.json";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  priority: string;
}

interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: eventsData,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
