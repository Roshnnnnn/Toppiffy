import { createSlice } from "@reduxjs/toolkit";
import {
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
} from "../../features/ImagesFile.jsx";

const sliderData = [
  { id: 1, image: Carousel1 },
  { id: 2, image: Carousel2 },
  { id: 3, image: Carousel3 },
  { id: 4, image: Carousel4 },
];

const initialState = {
  value: 0,
  length: sliderData.length,
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    nextSlider: (state, action) => {
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlider: (state, action) => {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    },
    dotSlide: (state, action) => {
      const slide = action.payload;
      state.value = slide;
    },
  },
});

export const { nextSlider, prevSlider, dotSlide } = sliderSlice.actions;

export default sliderSlice.reducer;
