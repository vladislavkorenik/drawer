import React, { useState } from "react";

import "./DataOutput.css";
import { ErrorsList } from "../ErrorsList/ErrorsList";

export const DataOutput = ({ data }) => {
  const [buttonActive, setHasErrors] = useState(false);
  const buttonStyle = data.hasError
    ? "dataOutput__button btn btn-danger"
    : "dataOutput__button btn btn-secondary";

  return (
    <div
      className="shadow pt-5 p-2 mb-3 mt-3 bg-light rounded dataOutput"
      style={{
        minHeight: "500px",
        minWidth: "300px",
        maxWidth: "300px",
        textAlign: "center"
      }}
    >
      <button
        className={buttonStyle}
        onClick={() => setHasErrors(!buttonActive)}
      >
        Errors
      </button>
      {buttonActive ? (
        <ErrorsList errors={data.errors} />
      ) : (
        <pre>{data.text}</pre>
      )}
    </div>
  );
};
