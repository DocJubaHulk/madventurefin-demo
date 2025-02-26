import React, { useState } from "react";
import FileUploadButton from "./FileUploadButton";
import "./FileUploadButtonDemo.css";

const FileUploadButtonDemo = () => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (file) => {
    setFileName(file.name);
  };

  return (
    <div className="file-upload-demo-container">
      <h2 className="header">File Upload Button Demo</h2>
      <FileUploadButton onFileSelect={handleFileUpload} />
      {fileName && <p className="file-name">Uploaded File: {fileName}</p>}
    </div>
  );
};

export default FileUploadButtonDemo;

