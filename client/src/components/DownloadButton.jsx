import React from "react";

function DownloadButton({ base64ImageString, fileName, className }) {
  const downloadImage = (e) => {
    e.preventDefault();
    const byteCharacters = atob(base64ImageString);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" }); // replace image/png with the appropriate MIME type for your image
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={downloadImage} className={className}>
      Download
    </button>
  );
}

export default DownloadButton;