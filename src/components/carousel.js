import React, { useState } from "react";

const imageList = [
  "https://images.unsplash.com/photo-1690342822352-ec6335a0a23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1690223660105-ead7d431998d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1690342823212-68a2b833f5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1690342823606-4d8d3d799872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNextClick() {
    setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
  }

  function handlePrevClick() {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + imageList.length) % imageList.length
    );
  }

  return (
    <div className="carousel">
      <button
        className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
        onClick={handlePrevClick}
      >
        Previous
      </button>

      <button
        className="text-white right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600"
        onClick={handleNextClick}
      >
        Next
      </button>
      <img
        className=" flex flex-col items-center justify-center align-items-center w-2/4 h-2/4"
        src={imageList[currentImage]}
        alt={`Image ${currentImage + 1}`}
      />
    </div>
  );
}
