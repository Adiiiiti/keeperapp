import React from "react";
import ReactDOM from "react-dom";

function Headers() {
  return ReactDOM.render(
    <header>
      <div>
        <h1>KEEPER</h1>
      </div>
    </header>,
    document.getElementById("root")
  );
}

export default Headers;
