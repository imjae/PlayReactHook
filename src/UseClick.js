import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
    const element = useRef(null);
    useEffect(() => {
        if(element.current) {
            element.current.addEventListener("click", onClick);
        }

        return () => {
            if(element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);

    if(typeof onClick !== "function") {
        return;
    }


    return element;
}

const App = () => {
    const sayHello = () => console.log("sya hello");
    const title = useClick(sayHello);

    // const potato = useRef(null);
    // // setTimeout(() => potato.current.focus(), 5000);
    // const onButtonClick = () => {
    //     potato.current.focus();
    // }
  
    return (
      <div className="App">
        <hi ref={title}>Hi</hi>


        {
        // <input ref={potato} placeholder="la" />
        //<button onClick={onButtonClick}>Focus the input</button>
        }
      </div>
    );
  };
  
  export default App;