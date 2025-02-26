import React, { useRef } from "react";
import "./FileUploadButton.css"; // Ensuring correct CSS reference

const FileUploadButton = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      onFileSelect(event.target.files[0]);
    }
  };

  return (
    <div className="file-upload-container">
      <button
        className="file-upload-button"
        onClick={handleButtonClick}
      >
        Upload File
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUploadButton;

