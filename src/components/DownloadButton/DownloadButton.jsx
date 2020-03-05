import React from "react";

export const DownloadButton = ({ href }) => {
  const buttonStyle = href
    ? "mb-3 display-4 btn btn-light stretched-link"
    : "mb-3 alert alert-light";
  const Component = href ? "a" : "p";
  return (
    <Component
      href={href}
      download={href ? "output" : null}
      className={buttonStyle}
    >
      {href ? "Download canvas" : "Upload your .txt file with commands"}
    </Component>
  );
};
