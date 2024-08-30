import React from "react";

export default function Blogcard(props) {
  var ans = JSON.stringify(props.answer);
  console.log(ans.split(" ").length > 30);
  if (ans.split(" ").length > 30) {
    ans = ans.split(" ").slice(0, 40).join(" ") + "...؜";
  }
  return (
    <div className="blog-card">
      <img className="blog-img" src={props.img} alt="blog-img" />
      <div className="container-blog">
        <h1 align="right">{props.title}</h1>
        <p align="right">{ans.toString()}</p>
        <div className="cardFooter">
          <a href={"ped-blogs/" + props.title}>
            <button className="cardFooterButton">
              <span>اقرأ المزيد</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
