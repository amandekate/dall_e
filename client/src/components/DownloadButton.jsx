import React from "react";
import { downloadImage } from "../utils";

function DownloadButton({ _id, photo, prompt }) {
// function DownloadButton({ base64ImageString, fileName, className }) {
  //   const downloadImage = (e) => {
  //     e.preventDefault();
  //     const byteCharacters = atob(base64ImageString);
  //     const byteNumbers = new Array(byteCharacters.length);
  //     for (let i = 0; i < byteCharacters.length; i++) {
  //       byteNumbers[i] = byteCharacters.charCodeAt(i);
  //     }
  //     const byteArray = new Uint8Array(byteNumbers);
  //     const blob = new Blob([byteArray], { type: "image/jpeg" });
  //     const url = URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = fileName;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     URL.revokeObjectURL(url);
  //   };

  //   return (
  //     <button onClick={downloadImage} className={className}>
  //       Download
  //     </button>
  //   );
  // }
  const downloadImage = (e) => {
    e.preventDefault();
    try {
      const byteCharacters = window.atob(base64ImageString);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to decode base64ImageString:", error);
    }
  };

  return (
    <button type="button" onClick={() => downloadImage(_id, photo)}>
            <img src={download} alt="download" />
          </button>
  );
}

export default DownloadButton;
