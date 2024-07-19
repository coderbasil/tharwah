import React from "react";
import { useParams } from "react-router-dom";
import pedBlogs from "../assets/ped-blogs";

export default function Pedblog() {
  let params = useParams();
  const props = pedBlogs.find((blog) => blog.title === params.blogtitle);
  return (
    <div>
      <div className="pedblog-body">
        <div className="pedblog-txt">
          <h1 align="right" className="pedblog-header">
            {props.title}
          </h1>
          <p align="right" className="pedblog-ans">
            {props.answer}
          </p>
        </div>
        <div className="pedblog-img">
          <a href={props.url_pic}>
            <img src={props.url_pic} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
