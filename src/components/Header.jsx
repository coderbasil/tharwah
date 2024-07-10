import React from "react";

function Header() {
  return (
    <header>
      <div className="flex-container headerDiv">
        <div className="flex-item logoDiv">
          <img
            className="logo"
            src="https://cdn.salla.sa/NOYPq/iFHDPZdriZ0mKQBVDwQBXoAB0RjxHnstx0DC1NNz.jpg"
            alt="logo"
          />
        </div>
        <div className="flex-item logoName">
          <span style={{ fontSize: 30 }}></span>
        </div>

        <div className="flex-item divDetector">
          <a href="">عننا</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
