import React, { useEffect, useState } from "react";
import "./styles.css";

// 마우스가 화면을 벗어날때 발생하는 이벤트 만들기
// useEffect 시 mouseleave 이벤트 addEventListener 해주기
// addEventListener(element이벤트 이름, 실행할 함수);
// useEffect에서 removeEventListener도 해주기
// 1. 컴포넌트가 mount 되는시점에서 이벤트 걸어줌
// 2. add한 이벤트에서 실행시킬 함수 작성 (마우스가 화면 위로 나갈때만 로그 작성)

const useBeforeLeave = () => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      console.log("leave");
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  useBeforeLeave();
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
};

export default App;