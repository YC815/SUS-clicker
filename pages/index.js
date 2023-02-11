import React, { useState } from 'react'

const SusImage = () => {
  const [point, setPoint] = useState(0)
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    setPoint(point + 1)
  };

  return (
    <div className="container">
      <div className="left">
        <div className="point-display">點數：{point}</div>
        <img
          src="/sus.webp"
          alt="Sus Image"
          className={`img ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        />
      </div>
      <div className="separator"></div>
    </div>
  )
}

export default SusImage
