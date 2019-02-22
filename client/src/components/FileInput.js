import React from "react";

import Uploader from "./Uploader";
import Image from "./Image";

function FileInput(props) {
  return (
    <Uploader>
      {uploadProps => {
        return (
          <div>
            {/* render the image */}
            <Image
              src={uploadProps.src}
              setCanvasRef={uploadProps.setCanvasRef}
            />
            <input
              name="photo"
              type="file"
              className="upload-field"
              size="60px"
              ref={uploadProps.setRef}
            />
            <button className="upload-btn" onClick={uploadProps.handleUpload}>
              Upload
            </button>
          </div>
        );
      }}
    </Uploader>
  );
}

export default FileInput;
