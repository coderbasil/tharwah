import React from "react";
import Sheet from "../components/Sheet";
import ExcelSheets from "../assets/ExcelSheets.js";

export default function Sheets() {
  const getInitialState = () => {
    const value = {
      title: "اختر الجدول المرغوب",
      pic: "",
      link: "",
    };
    return value;
  };

  let val;

  const [value, setSheet] = React.useState(getInitialState);

  const WhichSheet = (e) => {
    const x = ExcelSheets.find((sheet) => sheet.title === e.target.value);
    setSheet(x);
  };

  return (
    <div className="sheet-page">
      <div className="sheet-header">
        <div></div>
        <div className="sheet-headers">
          <h1>جداول المتابعة</h1>
        </div>
        <a href="#sheet-main">
          <div className="sheet-chev">
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        </a>
      </div>

      <div className="sheet-main" id="sheet-main">
        <div className="sheet-dropdown">
          <select className="sheet-select" value={val} onChange={WhichSheet}>
            <option value="" hidden>
              اختر الجدول
            </option>
            <option
              value="youtube"
              onClick={window.scrollTo({ top: 1000, behavior: "smooth" })}
            >
              youtube
            </option>
            <option
              value="twitter"
              onClick={window.scrollTo({ top: 1000, behavior: "smooth" })}
            >
              twitter
            </option>
            <option
              value="tiktok"
              onClick={window.scrollTo({ top: 1000, behavior: "smooth" })}
            >
              tiktok
            </option>
          </select>
        </div>
        <Sheet title={value.title} pic={value.pic} link={value.link} />
      </div>
    </div>
  );
}
