import React, { useState } from "react";

const imageList = [
  "https://images.unsplash.com/photo-1690342822352-ec6335a0a23e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1690223660105-ead7d431998d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1690342823212-68a2b833f5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1690342823606-4d8d3d799872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNextClick() {
    setCurrentImage((prevImage) => (prevImage + 1) % imageList.length);
  }

  return (
    <div className="carousel">
      <button onClick={handleNextClick}>Next</button>
      <img src={imageList[currentImage]} alt={`Image ${currentImage + 1}`} />
    </div>
  );
}
