import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import useAxios from "./UseAxios";

const App = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });

  // console.log(
  //   `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  // );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
