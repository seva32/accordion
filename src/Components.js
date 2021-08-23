import React from "react";
import "./Components.css";

function AccordionButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function AccordionContents({ isOpen, children, ...props }) {
  return (
    <div
      style={{
        maxHeight: isOpen ? "200px" : "0px",
        overflowY: "hidden",
        textAlign: "justify",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function AccordionItem({ direction, children }) {
  return (
    <div
      className="accordion-item"
      style={{ gridAutoFlow: direction === "horizontal" ? "column" : "row" }}
    >
      {children}
    </div>
  );
}

function TabButtons({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function TabButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
        textAlign: "center",
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function TabItems({ children }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: 120,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
}

function BelowTabItem({ open, children, ...props }) {
  return (
    <div
      style={{
        opacity: open ? "1" : "0",
        top: open ? "30" : "0",
        position: "absolute",
        overflowY: "hidden",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function AboveTabItem({ open, children, ...props }) {
  return (
    <div
      style={{
        opacity: open ? "1" : "0",
        top: open ? "0" : "30",
        position: "absolute",
        overflowY: "hidden",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function TabItem({ position, isOpen, children, ...props }) {
  return position === "above" ? (
    <AboveTabItem open={isOpen} {...props}>
      {children}
    </AboveTabItem>
  ) : (
    <BelowTabItem open={isOpen} {...props}>
      {children}
    </BelowTabItem>
  );
}

export {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabItem,
  TabItems,
  TabButton,
  TabButtons,
};
