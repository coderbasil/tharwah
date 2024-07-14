import React from "react";
import snaplogo from "../assets/pictures/snapchat.png";
import xlogo from "../assets/pictures/xpng.png";
import tiktoklogo from "../assets/pictures/tiktok.png";

export default function Contact() {
  return (
    <div className="container">
      <div className="contactPage">
        <h1>تواصل معنا عبر وسائل التواصل</h1>
      </div>
      <div className="Socials">
        <div className="social-snap">
          <img className="snaplogo" src={snaplogo} alt="Snap-Logo" />
        </div>
        <div className="social-other">
          <div className="social-twitter">
            <a href="https://x.com/">
              <img height="80" src={xlogo} alt="x" />
            </a>
          </div>
          <div className="social-tiktok">
            <a href="">
              <img src={tiktoklogo} alt="tiktok" />
            </a>
          </div>
          <div className="social-email">
            <a href="https://mail.google.com/">
              <img
                height="80"
                src="https://w7.pngwing.com/pngs/817/967/png-transparent-gmail-logo-gmail-email-icon-logo-gmail-logo-angle-text-rectangle-thumbnail.png"
                alt="gmail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
