import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./Collapsible.css";

function Collapsible(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("collapsible_icon");

  const content = useRef(null);

  function toggleCollapsible() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `initial`
    );
    setRotateState(
      setActive === "active" ? "collapsible_icon" : "collapsible_icon rotate"
    );
  }
  const level = props.level || 0; 
  return (
    <div level = {level} className="collapsible_section">
      <button className={`collapsible ${setActive}`} onClick={toggleCollapsible}>
        <Chevron className={`${setRotate}`} width={7} fill={"#173F4F"} />
        <p className="collapsible_title">{props.prime}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="collapsible_content"
      >
        <div>
          <div className="collapsible_text">
            {(props.value != null) && (typeof (props.value) === 'object') ? 
            Object.entries(props.value).map((mapValue, index) => {
              return(<div  key = {`${index}a`}><Collapsible prime = {mapValue[0]} value = {mapValue[1]} level={level+1} /></div>)
            })
            : props.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collapsible;
