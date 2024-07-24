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
        {show && (<div style={{marginLeft:"2vw", fontSize:"3.5rem"}}><h1>{props.title}</h1></div>)}
      {!show && (
        <div className="sheet-tl">
          <div className="sheet-title">
            <h1>{props.title}</h1>
          </div>
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
