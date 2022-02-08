import React from "react";

function Button({ children, type, content, onClick, className}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
      {content}
    </button>
  );
}

export default Button;
