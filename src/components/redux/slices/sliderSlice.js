import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../features/ImagesFile";

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    value: 1,
    length: sliderData.length + 1,
  },
  reducers: {
    nextSlide(state, action) {
      state.value = action.payload > state.length - 1 ? 1 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload <= 1 ? state.length - 1 : action.payload;
    },
  },
});

export const { nextSlide, prevSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
