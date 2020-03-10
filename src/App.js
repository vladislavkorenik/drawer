import React, { useEffect, useState } from "react";
import "./App.css";
import { FileInput } from "./components/FileInput/FileInput";
import { DataOutput } from "./components/DataOutput/DataOutput";
import { DownloadButton } from "./components/DownloadButton/DownloadButton";
import { drawing } from "./logic/drawer";

function App() {
  const [fileData, setFileData] = useState([]);
  const [outputDate, setOutputData] = useState({
    text: "No data",
    errors: ["No errors"],
    hasError: false,
    href: null
  });

  useEffect(() => {
    if (fileData[0]) {
      setOutputData(drawing(fileData));
    }
  }, [fileData]);

  return (
    <div className="App">
      <FileInput setFileData={setFileData} setOutputData={setOutputData} />
      <DataOutput data={outputDate} />
      <DownloadButton href={outputDate.href} />
    </div>
  );
}

export default App;
