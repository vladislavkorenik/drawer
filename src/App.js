import React, { useState } from "react";
import "./App.css";
import { FileInput } from "./components/FileInput/FileInput";
import { DataOutput } from "./components/DataOutput/DataOutput";
import { DownloadButton } from "./components/DownloadButton/DownloadButton";

function App() {
  const [fileData, setFileData] = useState({ text: "No data", href: null });
  return (
    <div className="App">
      <FileInput setFileData={setFileData} />
      <DataOutput data={fileData.text} />
      <DownloadButton href={fileData.href} />
    </div>
  );
}

export default App;
