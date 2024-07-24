import React from "react";
import logo from "../assets/pictures/logo.png";
//TODO: Get the logo image here in the files.

function Header() {
  return (
    <header className="sticky">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="nav-items">
        <li>
          <a href="/about-us">عن ثروة</a>
        </li>
        <li>
          <a href="https://tharwah2023.com/">متجرنا</a>
        </li>
        <li>
          <a href="/ped-blogs">المنشورات البيطرية</a>
        </li>
        <li>
          <a href="/excel-sheet">جداول المتابعه</a>
        </li>
      </div>
      <div>
        <div class="navbar">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa fa-caret-down arrow"></i>
            </button>
            <div class="dropdown-content">
              <a href="/about-us">عن ثروة</a>
              <a href="https://tharwah2023.com/">متجرنا</a>
              <a href="/excel-sheet">جداول المتابعه</a>
              <a href="/ped-blogs">المنشورات البيطرية</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
