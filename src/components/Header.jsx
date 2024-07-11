import React from "react";
import logo from "../assets/pictures/logo.png";
//TODO: Get the logo image here in the files.

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className="nav-items">
        <li>
          <a href="/contact">تواصل معنا</a>
        </li>
        <li>
          <a href="/about-us">عن ثروة</a>
        </li>
        <li>
          <a href="https://tharwah2023.com/">متجرنا</a>
        </li>
        <li>
          <a href="/cost-calc">حاسبة التكاليف</a>
        </li>
        <li>
          <a href="/excel-sheet">جدول المتابعه</a>
        </li>
      </div>
    </header>
  );
}

export default Header;
