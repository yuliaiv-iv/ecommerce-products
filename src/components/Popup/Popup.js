import React, { useEffect } from "react";
import "./Popup.scss";

function Popup({ onClose, isOpen, className, children, type }) {
  function handleEsc(event) {
    if (event.key !== "Escape") {
      return;
    }
    onClose();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleOverlayClose = (event) => {
    if (event.target === event.currentTarget && isOpen) {
      onClose();
    }
    return;
  };

  return (
    <section
      className={`popup popup_${type} ${isOpen ? "popup_open" : ""}`}
      onMouseDown={handleOverlayClose}
    >
      <div className={className}>{children}</div>
    </section>
  );
}

export default Popup;
