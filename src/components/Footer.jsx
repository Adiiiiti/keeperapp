import React from "react";
import ReactDOM from "react-dom";

var currentYear = new Date().getFullYear();

function Footer() {
  return ReactDOM.render(
    <div>
      <footer>
        <p className="footer p">COPYRIGHT {currentYear}</p>
      </footer>
    </div>,
    document.getElementById("root")
  );
}

export default Footer;
