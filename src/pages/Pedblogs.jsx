import React from "react";
import pedBlogs from "../assets/ped-blogs";
import Blogcard from "../components/Blogcard";

export default function Pedblogs() {
  return (
    <div className="pedblogsBody">
      <div className="ped-header">
        <div></div>
        <div className="ped-header1">
          <h1>المنشورات البيطرية</h1>
        </div>
        <a href="#blog-body" className="no-phone">
          <div className="ped-chev">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </a>
      </div>
      <div id="blog-body" className="blog-body">
        <div className="ped-blogs1">
          {pedBlogs.slice(0, pedBlogs.length / 2).map((a) => {
            return (
              <div className="blogitem">
                <Blogcard title={a.title} answer={a.answer} img={a.url_pic} />
              </div>
            );
          })}
        </div>
        <div className="ped-blogs2">
          {pedBlogs.slice(pedBlogs.length / 2, pedBlogs.length).map((a) => {
            return (
              <div className="blogitem">
                <Blogcard title={a.title} answer={a.answer} img={a.url_pic} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
