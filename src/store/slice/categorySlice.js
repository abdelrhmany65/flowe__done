import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../feach/categoriesFetch";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const data = await fetchCategories();
      return data;
    } catch (error) {
      console.error("Fetching categories failed:", error);
      return thunkAPI.rejectWithValue("Failed to fetch categories. Please try again.");
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
