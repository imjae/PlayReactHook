import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useConfirm = (message, callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};

const App = () => {
  const okClick = () => console.log("Clicked OK");
  const cancelClick = () => console.log("Clicked Cancle");
  const confirmButtonClick = useConfirm(
    "Are you going to click on the button?",
    okClick,
    cancelClick
  );
  return (
    <div className="App">
      <button onClick={confirmButtonClick}>Hello!</button>
    </div>
  );
};

export default App;
