import React from "react";
import ReactDOM from "react-dom";

function Note() {
  return ReactDOM.render(
    <div className="note">
      <h1 className="note h1">TITLE</h1>,<p className="note p">CONTENT</p>
    </div>,
    document.getElementById("root")
  );
}

export default Note;
