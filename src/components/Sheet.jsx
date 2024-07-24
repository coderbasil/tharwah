import React from "react";

export default function Sheet(props) {
  const show = props.link == "";
  return (
    <div className="sheet">
      {!show && (
        <div className="sheet-pic">
          <img src={props.pic} alt="" />
        </div>
      )}
        {show && (<div className="sheet-ih"><h1>{props.title}</h1></div>)}
      {!show && (
        <div className="sheet-tl">
          <div>
            <a className="sheet-link" href={props.link}>
              للتحميل اضغط هنا
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
