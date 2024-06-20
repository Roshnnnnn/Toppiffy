import React from "react";

const Loader = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
    </div>
  );
};

export default Loader;
