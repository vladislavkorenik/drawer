import React from "react";
import "./FileInput.css";

export const FileInput = ({ setFileData }) => {
  const readFile = e => {
    const file = e.target.files[0];
    const fileName = file ? file.name : "";
    const reader = new FileReader();

    if (fileName.indexOf(".txt") !== -1) {
      reader.readAsText(file);

      reader.onload = function() {
        setFileData({
          text: reader.result,
          href: `data:text/plain;content-disposition=attachment;filename=file,${reader.result}`
        });
      };

      reader.onerror = function() {
        setFileData(reader.error);
      };
    } else
      setFileData({
        text: `${fileName ? "Invalid extension" : "Try again"}`,
        href: null
      });
  };

  return (
    <div className="custom-file">
      <input
        type="file"
        className="custom-file-input"
        id="inputGroupFile01"
        onChange={readFile}
        accept=".txt"
      />
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Choose file
      </label>
    </div>
  );
};
