import React from 'react'

function FileInput() {
    return (
        <div>
            <input  name = "photo" type = "file" className = "upload-field" size = "60px" />
            <button className = "upload-btn">Upload</button>
            
        </div>
    )
}

export default FileInput
