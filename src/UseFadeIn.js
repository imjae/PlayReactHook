import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

// useRef 사용해 fadeIn 효과 주고싶은 element에 연결
// 해당 element에 줘야할 스타일
// opacity ${duration}s ease-in-out ${delay}s
const useFadeIn = (duration, delay) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(3, 1);
  const fadeInP = useFadeIn(3, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello!</h1>
      <p {...fadeInP}>asd;lfkjas;dlkfjasdl;kf</p>
    </div>
  );
};

export default App;
