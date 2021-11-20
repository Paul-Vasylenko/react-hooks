import React, { useRef } from "react";
import useHover from "./../hooks/useHover";

function Hover() {
  const hoverRef = useRef();
  const isHovering = useHover(hoverRef);
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: isHovering ? "red" : "green",
      }}
      ref={hoverRef}
    ></div>
  );
}

export default Hover;
