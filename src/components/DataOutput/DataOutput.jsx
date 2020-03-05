import React from "react";

export const DataOutput = ({ data }) => {
  return (
    <div
      className="shadow p-3 mb-3 mt-3 bg-light rounded"
      style={{ minHeight: "500px", minWidth: "300px", textAlign: "center" }}
    >
      <pre>{data}</pre>
    </div>
  );
};
