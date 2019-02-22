import React from "react";

function Image(props) {
  const canvas = <canvas className="main-img" ref={props.setCanvasRef} />;
  return (
    <div>
      {props.src ? (
        <>
          {canvas}
          <img src={props.src} alt="placeholder" className="main-img" />
        </>
      ) : (
        <img
          src="./img/placeholder.jpg"
          alt="placeholder"
          className="main-img"
        />
      )}
    </div>
  );
}

export default Image;
