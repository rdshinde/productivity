import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import blogsData from "@/lib/blogs.json";

interface Blog {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  color: string;
  icon: string;
}

interface BlogsState {
  blogs: Blog[];
}

const initialState: BlogsState = {
  blogs: blogsData,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blogs.push(action.payload);
    },
  },
});

export const { addBlog } = blogsSlice.actions;

export default blogsSlice.reducer;
