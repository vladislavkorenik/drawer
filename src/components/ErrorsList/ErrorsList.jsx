import React from "react";

import "./ErrorsList.css";

export const ErrorsList = ({ errors }) => {
  return (
    <ul className="errorsList">
      {errors.map(error => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
};
