import React from "react";
// import { downloadImage } from "../utils";

// function DownloadButton({ base64ImageString, fileName }) {
//   const downloadImage = (e) => {
//     e.preventDefault();
//     const byteCharacters = window.atob(base64ImageString);
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
  
//   //

//   return (
//     <button onClick={downloadImage} className={className}>
//       Download
//     </button>
//   );
// }
const DownloadButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      Download
    </button>
  );
};
export default DownloadButton;
