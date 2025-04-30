import React, { useEffect, useState } from "react";

const TrafficLightPole = () => {
  return (
    <div className="bg-dark mx-auto" style={{ width: "10px", height: "60px" }}></div>
  );
};

const TrafficLightBody = ({ children }) => {
  return (
    <div className="bg-dark rounded p-3 d-flex flex-column align-items-center justify-content-around"
      style={{ width: "100px", height: "240px" }}>
      {children}
    </div>
  );
};

const TrafficLightLED = ({ color, active, onClick }) => {
  return (
    <div
      className="rounded-circle cursor-pointer my-2"
      style={{
        backgroundColor: color,
        width: "60px",
        height: "60px",
        cursor: "pointer",
        boxShadow: active ? `0 0 15px 5px ${color}` : "none",
        opacity: active ? 1 : 0.4
      }}
      onClick={onClick}
    />
  );
};

const TrafficLightApp = () => {
  const colors = ["red", "yellow", "green"]
  const [colorsLED, setColorsLED] = useState(colors);
  const [activeLight, setActiveLight] = useState(0);

  const handleLightClick = (index) => {
    setActiveLight(index);
  };
  const changeLedColor = () => {
    const nextIndex = activeLight + 1
    if (nextIndex >= colorsLED.length) {
      setActiveLight(0)
    } else {
      setActiveLight(nextIndex)
    }
  };


  return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-light">
      <TrafficLightPole />
      <TrafficLightBody>
        {colorsLED.map((colorLED, index) => (
          <TrafficLightLED
            color={colorLED}
            key={index}
            active={activeLight === index}
            onClick={() => handleLightClick(index)}
          />
        ))}
      </TrafficLightBody>
      <div className="d-flex mt-3">
        <button onClick={() => setColorsLED(["red", "yellow", "green", "purple"])} type="button" class="btn btn-primary">Add Purple</button>
        <button onClick={changeLedColor} type="button" className="btn btn-primary" style={{ marginLeft: '10px' }}>Cycle Color</button>
      </div>
    </div >
  );
};

export default TrafficLightApp;