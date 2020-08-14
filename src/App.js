import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>
        This is a netflix clone
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrendings} />
      </h1>
    </div>
  );
}

export default App;
