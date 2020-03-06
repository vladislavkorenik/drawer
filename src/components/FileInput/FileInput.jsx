import React from "react";
import "./FileInput.css";
import { fromStringToObject } from "../../logic/fromStringToObject";

export const FileInput = ({ setFileData, setOutputData }) => {
  const readFile = e => {
    const file = e.target.files[0];
    const fileName = file ? file.name : "";
    const reader = new FileReader();

    if (fileName.indexOf(".txt") !== -1) {
      reader.readAsText(file);

      reader.onload = function() {
        setFileData(fromStringToObject(reader.result));
      };

      reader.onerror = function() {
        setOutputData(reader.error);
      };
    } else
      setOutputData({
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
