import React from "react";
import { useParams } from "react-router-dom";
import pedBlogs from "../assets/ped-blogs";

export default function Pedblog() {
  let params = useParams();
  const props = pedBlogs.find((blog) => blog.title == params.blogtitle);
  console.log(props);
  return (
    <div className="blog-card">
      <img className="blog-img" src={props.url_pic} />
      <div className="container-blog">
        <h1 align="right">{props.title}</h1>
        <p align="right">{props.answer.toString()}</p>
      </div>
    </div>
  );
}
