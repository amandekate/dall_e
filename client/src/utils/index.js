import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}


export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}


// export function downloadsImage(e, base64String, prompt) {
//   e.preventDefault();
//   const link = document.createElement('a');
//   link.href = base64String;
//   link.download = prompt;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   console.log("Downloading !!");
// }