import React from "react";
import { nextSlider, prevSlider, dotSlide } from "../redux/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button>Next</button>
      <button>Previous</button>
    </div>
  );
};

export default Slider;
