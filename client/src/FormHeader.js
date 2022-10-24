import React from "react";
import './FormHeader.css'
let renderCount = 0;

export default function FormHeader() {
  renderCount++;

  return (
    <div style={{ marginBottom: 10 }}>
      <h1 className="h1">
        New Client Form
      </h1>
    </div>
  );
};

