import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

// 스크롤의 위치에 따라 발생하는 이벤트 hooks
// 현재 스크롤 위치 : window.scroll[X|Y]
// addEventListener("scroll",...);

const useScroll = () => {
  const [status, setStatus] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setStatus({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return status;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;
