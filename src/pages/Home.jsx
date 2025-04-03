import React from "react";
import Blogcard from "../components/Blogcard";
import petBlogs from "../assets/ped-blogs";
import logo from "../assets/pictures/logo.png";

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
        <div></div>
        <div className="headers">
          <h1>حياك في موقع ثروة</h1>
          <h2>للتربية النموذجية</h2>
        </div>
        <a href="#first">
          <div className="home-chev">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </a>
      </div>
      <div id="first" className="a">
        <div className="a-header">
          <h1 dir="rtl">عن ثروة</h1>
          <p lang="ar" dir="rtl">
            شركة ثروة للإنتاج الحيواني هي شركة رائدة في مجال تنمية وتطوير الثروة
            الحيوانية، تسعى إلى تحقيق الاكتفاء الذاتي وتعزيز الأمن الغذائي من
            خلال تقديم منتجات عالية الجودة وفقًا لأحدث المعايير العالمية. تأسست
            الشركة برؤية واضحة تهدف إلى دعم الاقتصاد الوطني عبر تبني أفضل
            الممارسات في تربية المواشي وإنتاج الألبان واللحوم، مع الحفاظ على
            الاستدامة البيئية والرفق بالحيوان. تفتخر شركة ثروة بفريق متخصص من
            الخبراء والمهنيين، وتسعى باستمرار إلى الابتكار وتطوير تقنيات الإنتاج
            الحيواني لضمان جودة وكفاءة منتجاتها في السوق المحلي والإقليمي.
          </p>
        </div>
        <div className="a-logo">
          <div className="shadow">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <h1 id="second" align="right" className="s-header">
        اخر المنشورات البيطرية
      </h1>
      <div className="second">
        <div></div>
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
