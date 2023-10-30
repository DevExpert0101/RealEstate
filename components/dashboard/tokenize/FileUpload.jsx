// pages/index.js
import { Button } from "bootstrap";
import Link from "next/link";
import React, { useState } from "react";

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileUpload = (e) => {
    const files = e.target.files;
    setSelectedFiles(files);
    const previews = Array.from(files).map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const displayUploadedFiles = (previews) => {
    return (
      <div className="image--grid--container">
        {previews.map((preview, index) => (
            
            <img style={{"marginTop":"10px","width":"31%", "height": "10%","marginRight":"2%", "borderRadius": "2px"}} key={index} src={preview} alt={`Image ${index + 1}`} width="100" />
            
        ))}
      </div>
    );
  };

  return (
    <div>
      <h5>File Upload and Display</h5>
      <input type="file" name="file-input" id="file-input" accept="image/*" multiple onChange={handleFileUpload} hidden/>

      <label class="button button--effect" for="file-input">
        <span style={{color:"white"}}>Upload file</span>
          <path
            fill="currentColor"
            // d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        
        </label>

      {selectedFiles.length > 0 && displayUploadedFiles(imagePreviews)}
      
    </div>
    
  );
}

export default FileUpload;
