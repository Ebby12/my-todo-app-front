import React from "react";

function Button({ title, action }) {
  return (
    <div
      style={{
        backgroundColor: "#927171",
        borderRadius: "10px",
        padding: "5px 10px",
        width: "fit-content",
        margin: "10px auto",
        color: "#fff",
      }}
      onClick={() => {
        action();
      }}
    >
      {title}
    </div>
  );
}

export default Button;
