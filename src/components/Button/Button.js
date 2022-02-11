import React from "react";

function Button({ children, type, content, onClick, className, title }) {
  return (
    <button type={type} onClick={onClick} className={className} title={title}>
      {children}
      {content}
    </button>
  );
}

export default Button;
