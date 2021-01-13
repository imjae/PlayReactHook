import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

// 이미지를 풀스크린 크기로 변경하는 훅

const useFullScreen = () => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  return { element, triggerFull };
};

const App = () => {
  const { element, triggerFull } = useFullScreen();
  return (
    <div className="App">
      <img
        ref={element}
        src="https://i.ytimg.com/vi/atgzSw20JBs/maxresdefault.jpg"
        style={{ width: 300 }}
        alt="moti"
      />
      <button onClick={triggerFull}>Full Size!</button>
    </div>
  );
};

export default App;
