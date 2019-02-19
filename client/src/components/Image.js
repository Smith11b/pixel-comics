import React from "react";

function Image(props) {
  return (
    <div>
      {props.isLoaded ? (
        <img src="" alt="uploaded user" className = "main-img" />
      ) : (
        <img src="./img/placeholder.jpg" alt="placeholder"  className = "main-img"/>
      )}
    </div>
  );
}

export default Image;
