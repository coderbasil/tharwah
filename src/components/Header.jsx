import React from "react";

function Header() {
  return (
    <header>
      <div className="flex-item">
        <img
          className="logo"
          src="https://cdn.salla.sa/NOYPq/iFHDPZdriZ0mKQBVDwQBXoAB0RjxHnstx0DC1NNz.jpg"
          alt="logo"
        />
      </div>

      <div className="nav-items">
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </div>
    </header>
  );
}

export default Header;
