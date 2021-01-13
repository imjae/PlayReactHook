import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

// addEventListener("online"); , addEventListener("offline");

// 네트워크 상태 (offline, online)에 따라 동작하는 hook 만들기
// 컴포넌트가 마운트되는 시점에서만 이벤트 연결해준다.
// 현제 네트워크 상태 : navigator.onLine

const useNetword = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offine");
  };
  const onLine = useNetword(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
    </div>
  );
};

export default App;
