import React from "react";
import Blogcard from "../components/Blogcard";
import petBlogs from "../assets/pet-blogs";

export default function Home() {
  console.log(window.innerWidth);
  var width = 600;
  if (window.innerWidth < 1024) {
    width = 800;
  }
  console.log('"' + width.toString() + '"');
  return (
    <div className="homePage">
      <div className="background-i">
        <div className="headers">
          <h1>حياك في موقع ثروة</h1>
          <h2>للتربية النموذجية</h2>
        </div>
      </div>
      <h1 align="right" className="s-header">اخر المنشورات البيطرية</h1>
      <div className="second">
        <div className="twitterPosts">
          <a
            class="twitter-timeline"
            data-lang="ar"
            data-width={width.toString()}
            data-height="1000"
            href="https://twitter.com/imoon2002?ref_src=twsrc%5Etfw"
          ></a>
        </div>
        <div className="pet-posts">
          <div className="blogCards">
            {petBlogs.slice(petBlogs.length - 4, petBlogs.length).map((a) => {
              return <Blogcard title={a.title} answer={a.answer} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
